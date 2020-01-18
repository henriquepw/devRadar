import socketio from 'socket.io'
import { Server } from 'http'

import { DevInterface } from './app/schemas/Dev'

import parseStringAsArray from './utils/parseStringAsArray'
import calculateDistance from './utils/calculateDistance'

interface Coordinates {
  latitude: number
  longitude: number
}

interface Query {
  latitude: string
  longitude: string
  techs: string
}

interface Connection {
  id: string
  techs: string[]
  coordinates: Coordinates
}

let io
const connections: Connection[] = []

function setupWebsocket (server: Server) {
  io = socketio(server)

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query as Query

    if (latitude && longitude) {
      connections.push({
        id: socket.id,
        coordinates: {
          longitude: Number(longitude),
          latitude: Number(latitude)
        },
        techs: parseStringAsArray(techs)
      })
    }
  })
}

function findConnections (coordinates: Coordinates, techs: string[]) {
  return connections.filter(
    connection =>
      calculateDistance(coordinates, connection.coordinates) < 10 &&
      connection.techs.some(tech => techs.includes(tech))
  )
}

function sendMessage (to: Connection[], message: string, data: DevInterface) {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data)
  })
}

export { setupWebsocket, findConnections, sendMessage }

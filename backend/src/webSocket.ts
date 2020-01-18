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

class Socket {
  public io: socketio.Server
  public connections: Connection[]

  constructor () {
    this.connections = []
  }

  public setupWebsocket (server: Server) {
    this.io = socketio(server)

    this.io.on('connection', socket => {
      const { latitude, longitude, techs } = socket.handshake.query as Query

      if (latitude && longitude) {
        this.connections.push({
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

  public findConnections (coordinates: Coordinates, techs: string[]) {
    return this.connections.filter(
      connection =>
        calculateDistance(coordinates, connection.coordinates) < 10 &&
        connection.techs.some(tech => techs.includes(tech))
    )
  }

  public sendMessage (to: Connection[], message: string, data: DevInterface) {
    to.forEach(connection => {
      this.io.to(connection.id).emit(message, data)
    })
  }
}

export default new Socket()

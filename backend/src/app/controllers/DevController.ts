import { Request, Response } from 'express'
import axios from 'axios'

import Dev from '../schemas/Dev'

import parseStringAsArray from '../../utils/parseStringAsArray'
import { findConnections, sendMessage } from '../../websocket'

interface StoreBody {
  github_username: string
  latitude: number
  longitude: number
  techs?: string
}

class DevController {
  public async index (_: Request, res: Response) {
    const devs = await Dev.find()

    return res.json(devs)
  }

  public async store (req: Request, res: Response) {
    const {
      github_username,
      techs,
      latitude,
      longitude
    } = req.body as StoreBody

    const devExists = await Dev.findOne({ github_username })

    if (devExists) {
      return res.status(400).json({
        error: 'User already exists with this username'
      })
    }

    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    )

    const { name = github_username, avatar_url, bio } = response.data

    const techsArray = parseStringAsArray(techs)

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }

    const dev = await Dev.create({
      bio,
      name,
      avatar_url,
      github_username,
      techs: techsArray,
      location
    })

    // Filtar as conexões que estão há no máximo 10km de distância
    // e que o novo deve tenha pelo menos um das technologias filtradas
    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      techsArray
    )

    sendMessage(sendSocketMessageTo, 'new-dev', dev)

    return res.json(dev)
  }
}

export default new DevController()

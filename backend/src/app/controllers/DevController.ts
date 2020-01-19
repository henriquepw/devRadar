import { Request, Response } from 'express'
import axios from 'axios'

import Dev, { DevInterface } from '../schemas/Dev'
import parseStringAsArray from '../../utils/parseStringAsArray'
import io from '../../webSocket'

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
      techs,
      latitude,
      longitude,
      github_username
    } = req.body as StoreBody

    /**
     * Checking if the Dev already exists
     */
    const devExists = await Dev.findOne({ github_username })

    if (devExists) {
      return res.status(400).json({
        error: 'User already exists with this username'
      })
    }

    /**
     * Creating Dev
     */
    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    )

    const {
      name = github_username,
      avatar_url,
      bio
    } = response.data as DevInterface

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

    /**
     * List the connections that are at most 10 km away and that the new Dev
     * has at least one of the filtered technologies
     */
    const sendSocketMessageTo = io.findConnections(
      { latitude, longitude },
      techsArray
    )

    io.sendMessage(sendSocketMessageTo, 'new-dev', dev)

    return res.json(dev)
  }
}

export default new DevController()

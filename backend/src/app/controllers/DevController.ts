import { Request, Response } from 'express'
import axios from 'axios'

import Dev from '../schemas/Dev'

interface StoreBody {
  github_username: string
  latitude: string
  longitude: string
  techs?: string
}

class DevController {
  public async index (req: Request, res: Response): Promise<Response> {
    const devs = await Dev.find()

    return res.json(devs)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const { github_username, techs, latitude, longitude } = req.body as StoreBody

    const response = await axios.get(`https://api.github.com/users/${github_username}`)

    const { name = github_username, avatar_url, bio } = response.data

    const techsArray = techs.split(',').map(tech => tech.trim())

    const location = {
      type: 'Point',
      coordinates: [
        longitude,
        latitude
      ]
    }

    const dev = await Dev.create({
      bio,
      name,
      avatar_url,
      github_username,
      techs: techsArray,
      location
    })

    return res.json(dev)
  }
}

export default new DevController()

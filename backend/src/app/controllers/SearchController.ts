import { Request, Response } from 'express'
import Dev from '../schemas/Dev'

import parseStringAsArray from '../../utils/parseStringAsArray'

interface IndexBody {
  techs?: string
  latitude?: string
  longitude?: string
  radius?: number
}

class SeachControllers {
  public async index (req: Request, res: Response): Promise<Response> {
    const { latitude, longitude, techs, radius = 10 } = req.query as IndexBody

    const techsArray = parseStringAsArray(techs)

    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: radius * 1000 // in meters
        }
      }
    })

    return res.json({ devs })
  }
}

export default new SeachControllers()

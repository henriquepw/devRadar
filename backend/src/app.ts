import 'dotenv/config'

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes'

class App {
  public server: express.Application

  constructor () {
    this.server = express()

    this.database()
    this.middlewares()
    this.routes()
  }

  private database () : void {
    mongoose.connect(process.env.MONGO_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private middlewares () : void {
    this.server.use(express.json())
    this.server.use(cors())
  }

  private routes () : void {
    this.server.use(routes)
  }
}

export default new App().server

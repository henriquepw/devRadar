import 'dotenv/config'

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import http from 'http'

import routes from './routes'
import io from './webSocket'

class App {
  public app: express.Application
  public server: http.Server

  constructor () {
    this.app = express()
    this.server = new http.Server(this.app)

    // Initalizing WebSocket
    io.setupWebsocket(this.server)

    this.database()
    this.middlewares()
    this.routes()
  }

  private database () {
    mongoose.connect(process.env.MONGO_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private middlewares () {
    this.app.use(express.json())
    this.app.use(cors())
  }

  private routes () {
    this.app.use(routes)
  }
}

export default new App().server

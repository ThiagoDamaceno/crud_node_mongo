import express, { Application, Response } from 'express'
import cors from 'cors'
import { setRoutes } from './setRoutes'
import { initConnectionMongo } from './databases/mongo/initConnectionMongo'
import * as dotenv from 'dotenv'

class Server {
  expressApp: Application = express()

  constructor () {
    this.config()
    this.routes()
  }

  private config () {
    this.expressApp.use(express.json())
    this.expressApp.use((_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
      this.expressApp.use(cors())
      next()
    })

    this.expressApp.get('/', (req, res: Response) => res.json({
      text: 'ok'
    }))

    dotenv.config()
    initConnectionMongo()
  }

  private routes () {
    setRoutes(this.expressApp)
  }

  init () {
    const PORT = process.env.NODE_PORT || 3000
    this.expressApp.listen(PORT, () => {
      console.log(`Server's running on port ${PORT}...`)
    })
  }
}

export default new Server()

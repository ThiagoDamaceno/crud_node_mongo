import express, { Application } from 'express'
import { setRoutes } from './setRoutes'

class Server {
  expressApp: Application = express()

  constructor () {
    this.config()
  }

  private config () {
    this.expressApp.use(express.json())
  }

  private routes () {
    setRoutes(this.expressApp)
  }

  init () {
    this.expressApp.listen(3000, () => {
      console.log(`Server's running on port ${3000}...`)
    })
  }
}

export default new Server()

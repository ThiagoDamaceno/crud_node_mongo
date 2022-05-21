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
    const PORT = process.env.NODE_PORT || 3000
    this.expressApp.listen(PORT, () => {
      console.log(`Server's running on port ${PORT}...`)
    })
  }
}

export default new Server()

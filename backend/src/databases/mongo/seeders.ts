import { initConnectionMongo } from './initConnectionMongo'
import { connectorSeeder } from './seeders/connectorSeeder'
import * as dotenv from 'dotenv'

async function init () {
  dotenv.config()
  await initConnectionMongo()

  await connectorSeeder()
}

init()

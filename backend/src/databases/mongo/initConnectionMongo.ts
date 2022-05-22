import mongoose from 'mongoose'

async function initConnectionMongo () {
  const USER = process.env.MONGO_INIT_ROOT_USERNAME
  const PASSWORD = process.env.MONGO_INIT_ROOT_PASSWORD
  const HOST = process.env.MONGO_HOST
  const PORT = process.env.MONGO_PORT

  const URI = `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}`

  try {
    await mongoose.connect(URI)
    console.log(`Mongo connected on port ${PORT}`)
  } catch (err) {
    console.log(err)
  }
}

export { initConnectionMongo }

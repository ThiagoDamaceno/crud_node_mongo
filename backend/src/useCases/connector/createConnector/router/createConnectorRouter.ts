import { Router } from 'express'
import { CreateConnectorController } from '../controller/CreateConnectorController'
import { createConnectorFactory } from '../factory/createConnectorFactory'

function createConnectorRouter (): Router {
  const router = Router()

  const controller = new CreateConnectorController(createConnectorFactory())
  router.post('/', async (req, res) => await controller.execute(req, res))

  return router
}

export { createConnectorRouter }

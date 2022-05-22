import { Router } from 'express'
import { UpdateConnectorController } from '../controller/UpdateConnectorController'
import { updateConnectorFactory } from '../factory/updateConnectorFactory'

function updateConnectorRouter (): Router {
  const router = Router()

  const controller = new UpdateConnectorController(updateConnectorFactory())
  router.put('/', async (req, res) => await controller.execute(req, res))

  return router
}

export { updateConnectorRouter }

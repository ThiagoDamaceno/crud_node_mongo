import { Router } from 'express'
import { GetConnectorByIdController } from '../controller/GetConnectorByIdController'
import { getConnectorByIdFactory } from '../factory/getConnectorByIdFactory'

function getConnectorByIdRouter (): Router {
  const router = Router()

  const controller = new GetConnectorByIdController(getConnectorByIdFactory())

  router.get('/byId/:_id', async (req, res) => await controller.execute(req, res))

  return router
}

export { getConnectorByIdRouter }

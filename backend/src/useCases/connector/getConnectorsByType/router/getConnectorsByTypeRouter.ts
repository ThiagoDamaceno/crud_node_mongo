import { Router } from 'express'
import { GetConnectorsByTypeController } from '../controller/GetConnectorsByTypeController'
import { getConnectorsByTypeFactory } from '../factory/getConnectorsByTypeFactory'

function getConnectorsByTypeRouter (): Router {
  const router = Router()

  const controller = new GetConnectorsByTypeController(getConnectorsByTypeFactory())

  router.get('/byType/:type', async (req, res) => await controller.execute(req, res))

  return router
}

export { getConnectorsByTypeRouter }

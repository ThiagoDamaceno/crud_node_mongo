import { Router } from 'express'
import { GetConnectorsController } from '../controller/GetConnectorController'
import { getConnectorsFactory } from '../factory/getConnectorsFactory'

function getConnectorsRouter (): Router {
  const router = Router()

  const controller = new GetConnectorsController(getConnectorsFactory())

  router.get('/all', async (req, res) => await controller.execute(req, res))

  return router
}

export { getConnectorsRouter }

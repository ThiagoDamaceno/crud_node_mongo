import { Router } from 'express'
import { GetConnectorByNameController } from '../controller/GetConnectorByNameController'
import { getConnectorByNameFactory } from '../factory/getConnectorByNameFactory'

function getConnectorsByNameRouter (): Router {
  const router = Router()

  const controller = new GetConnectorByNameController(getConnectorByNameFactory())

  router.get('/byName/:name', async (req, res) => await controller.execute(req, res))

  return router
}

export { getConnectorsByNameRouter }

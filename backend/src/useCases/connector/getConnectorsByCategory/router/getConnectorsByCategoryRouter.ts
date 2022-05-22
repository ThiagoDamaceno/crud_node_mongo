import { Router } from 'express'
import { GetConnectorsByCategoryController } from '../controller/GetConnectorsByCategoryController'
import { getConnectorsByCategoryFactory } from '../factory/getConnectorsByCategoryFactory'

function getConnectorsByCategoryRouter (): Router {
  const router = Router()

  const controller = new GetConnectorsByCategoryController(getConnectorsByCategoryFactory())

  router.get('/byCategory/:category', async (req, res) => await controller.execute(req, res))

  return router
}

export { getConnectorsByCategoryRouter }

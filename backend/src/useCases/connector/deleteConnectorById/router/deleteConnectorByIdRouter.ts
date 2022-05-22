import { Router } from 'express'
import { DeleteConnectorByIdController } from '../controller/DeleteConnectorByIdController'
import { deleteConnectorByIdFactory } from '../factory/deleteConnectorByIdFactory'

function deleteConnectorByIdRouter (): Router {
  const router = Router()

  const controller = new DeleteConnectorByIdController(deleteConnectorByIdFactory())

  router.delete('/byId/:_id', async (req, res) => await controller.execute(req, res))

  return router
}

export { deleteConnectorByIdRouter }

import { Router } from 'express'
import { GetConnectorsByPrivacyController } from '../controller/GetConnectorsByPrivacyController'
import { getConnectorsByPrivacyFactory } from '../factory/getConnectorsByPrivacyFactory'

function getConnectorsByPrivacyRouter (): Router {
  const router = Router()

  const controller = new GetConnectorsByPrivacyController(getConnectorsByPrivacyFactory())

  router.get('/byPrivacy/:privacy', async (req, res) => await controller.execute(req, res))

  return router
}

export { getConnectorsByPrivacyRouter }

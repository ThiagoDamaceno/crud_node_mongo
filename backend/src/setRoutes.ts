import { Application } from 'express'
import { createConnectorRouter } from './useCases/connector/createConnector/router/createConnectorRouter'
import { deleteConnectorByIdRouter } from './useCases/connector/deleteConnectorById/router/deleteConnectorByIdRouter'
import { getConnectorByIdRouter } from './useCases/connector/getConnectorById/router/getConnectorByIdRouter'
import { getConnectorsRouter } from './useCases/connector/getConnectors/router/getConnectorsRouter'
import { getConnectorsByCategoryRouter } from './useCases/connector/getConnectorsByCategory/router/getConnectorsByCategoryRouter'
import { getConnectorsByNameRouter } from './useCases/connector/getConnectorsByName/router/getConnectorsByNameRouter'
import { getConnectorsByPrivacyRouter } from './useCases/connector/getConnectorsByPrivacy/router/getConnectorsByPrivacyRouter'
import { getConnectorsByTypeRouter } from './useCases/connector/getConnectorsByType/router/getConnectorsByTypeRouter'
import { updateConnectorRouter } from './useCases/connector/updateConnector/router/updateConnectorRouter'

function setRoutes (expressApp: Application) {
  expressApp.use('/connector', createConnectorRouter())
  expressApp.use('/connector', deleteConnectorByIdRouter())
  expressApp.use('/connector', getConnectorsRouter())
  expressApp.use('/connector', getConnectorByIdRouter())
  expressApp.use('/connector', getConnectorsByCategoryRouter())
  expressApp.use('/connector', getConnectorsByNameRouter())
  expressApp.use('/connector', getConnectorsByPrivacyRouter())
  expressApp.use('/connector', getConnectorsByTypeRouter())
  expressApp.use('/connector', updateConnectorRouter())
}

export { setRoutes }

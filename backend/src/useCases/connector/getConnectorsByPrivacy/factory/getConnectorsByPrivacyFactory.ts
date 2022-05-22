import { ConnectorRepositoryMongo } from '../../../../repositories/connector/mongo/ConnectorRepositoryMongo'
import { GetConnectorsByPrivacyService } from '../service/GetConnectorsByPrivacyService'

function getConnectorsByPrivacyFactory (): GetConnectorsByPrivacyService {
  const repository = new ConnectorRepositoryMongo()
  return new GetConnectorsByPrivacyService(repository)
}

export { getConnectorsByPrivacyFactory }

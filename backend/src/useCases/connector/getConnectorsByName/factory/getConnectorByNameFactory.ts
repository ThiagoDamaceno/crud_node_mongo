import { ConnectorRepositoryMongo } from '../../../../repositories/connector/mongo/ConnectorRepositoryMongo'
import { GetConnectorsByNameService } from '../service/GetConnectorsByNameService'

function getConnectorByNameFactory (): GetConnectorsByNameService {
  const repository = new ConnectorRepositoryMongo()
  return new GetConnectorsByNameService(repository)
}

export { getConnectorByNameFactory }

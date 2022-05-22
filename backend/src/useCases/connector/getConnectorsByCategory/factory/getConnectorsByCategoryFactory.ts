import { ConnectorRepositoryMongo } from '../../../../repositories/connector/mongo/ConnectorRepositoryMongo'
import { GetConnectorsByCategoryService } from '../service/GetConnectorsByCategoryService'

function getConnectorsByCategoryFactory (): GetConnectorsByCategoryService {
  const repository = new ConnectorRepositoryMongo()
  return new GetConnectorsByCategoryService(repository)
}

export { getConnectorsByCategoryFactory }

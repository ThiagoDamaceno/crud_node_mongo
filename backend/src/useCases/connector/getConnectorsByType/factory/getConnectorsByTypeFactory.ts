import { ConnectorRepositoryMongo } from '../../../../repositories/connector/mongo/ConnectorRepositoryMongo'
import { GetConnectorsByTypeService } from '../service/GetConnectorsByTypeService'

function getConnectorsByTypeFactory (): GetConnectorsByTypeService {
  const repository = new ConnectorRepositoryMongo()
  return new GetConnectorsByTypeService(repository)
}

export { getConnectorsByTypeFactory }

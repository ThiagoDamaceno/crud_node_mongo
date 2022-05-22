import { ConnectorRepositoryMongo } from '../../../../repositories/connector/mongo/ConnectorRepositoryMongo'
import { GetConnectorByIdService } from '../service/GetConnectorByIdService'

function getConnectorByIdFactory (): GetConnectorByIdService {
  const repository = new ConnectorRepositoryMongo()
  return new GetConnectorByIdService(repository)
}

export { getConnectorByIdFactory }

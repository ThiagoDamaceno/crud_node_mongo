import { ConnectorRepositoryMongo } from '../../../../repositories/connector/mongo/ConnectorRepositoryMongo'
import { DeleteConnectorByIdService } from '../service/DeleteConnectorByIdService'

function deleteConnectorByIdFactory (): DeleteConnectorByIdService {
  const repository = new ConnectorRepositoryMongo()
  return new DeleteConnectorByIdService(repository)
}

export { deleteConnectorByIdFactory }

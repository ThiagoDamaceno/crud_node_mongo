import { ConnectorRepositoryMongo } from '../../../../repositories/connector/mongo/ConnectorRepositoryMongo'
import { UpdateConnectorService } from '../service/UpdateConnectorService'

function updateConnectorFactory (): UpdateConnectorService {
  const repository = new ConnectorRepositoryMongo()
  return new UpdateConnectorService(repository)
}

export { updateConnectorFactory }

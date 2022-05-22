import { ConnectorRepositoryMongo } from '../../../../repositories/connector/mongo/ConnectorRepositoryMongo'
import { CreateConnectorService } from '../service/CreateConnectorService'

function createConnectorFactory (): CreateConnectorService {
  const repository = new ConnectorRepositoryMongo()
  return new CreateConnectorService(repository)
}

export { createConnectorFactory }

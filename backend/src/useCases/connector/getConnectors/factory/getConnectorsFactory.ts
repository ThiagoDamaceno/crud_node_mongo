import { ConnectorRepositoryMongo } from '../../../../repositories/connector/mongo/ConnectorRepositoryMongo'
import { GetConnectorsService } from '../service/GetConnectorsService'

function getConnectorsFactory (): GetConnectorsService {
  const repository = new ConnectorRepositoryMongo()

  return new GetConnectorsService(repository)
}

export { getConnectorsFactory }

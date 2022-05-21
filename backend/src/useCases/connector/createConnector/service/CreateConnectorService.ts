import { ConnectorModel, IConnectorModelAttributes } from '../../../../models/ConnectorModel'
import { IConnectorRepository } from '../../../../repositories/connector/IConnectorRepository'

class CreateConnectorService {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private connectorRepository: IConnectorRepository
  ) { }

  async execute (connectorAttributes: IConnectorModelAttributes): Promise<ConnectorModel> {
    const newConnector = new ConnectorModel(connectorAttributes)

    return await this.connectorRepository.createConnector(newConnector)
  }
}

export { CreateConnectorService }

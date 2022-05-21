import { ConnectorModel } from '../../../../models/ConnectorModel'
import { IConnectorRepository } from '../../../../repositories/connector/IConnectorRepository'

class GetConnectorsService {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private connectorRepository: IConnectorRepository
  ) { }

  async execute (): Promise<ConnectorModel[]> {
    return await this.connectorRepository.getConnectors()
  }
}

export { GetConnectorsService }

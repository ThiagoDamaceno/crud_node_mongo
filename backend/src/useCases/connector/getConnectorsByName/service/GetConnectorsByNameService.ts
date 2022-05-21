import { ConnectorModel } from '../../../../models/ConnectorModel'
import { IConnectorRepository } from '../../../../repositories/connector/IConnectorRepository'

class GetConnectorsByNameService {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private connectorRepository: IConnectorRepository
  ) { }

  async execute (name: string): Promise<ConnectorModel[]> {
    return await this.connectorRepository.getConnectorsByName(name)
  }
}

export { GetConnectorsByNameService }

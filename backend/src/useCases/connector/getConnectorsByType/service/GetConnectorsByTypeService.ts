import { ConnectorModel } from '../../../../models/ConnectorModel'
import { IConnectorRepository } from '../../../../repositories/connector/IConnectorRepository'

class GetConnectorsByTypeService {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private connectorRepository: IConnectorRepository
  ) { }

  async execute (type: string): Promise<ConnectorModel[]> {
    return await this.connectorRepository.getConnectorsByType(type)
  }
}

export { GetConnectorsByTypeService }

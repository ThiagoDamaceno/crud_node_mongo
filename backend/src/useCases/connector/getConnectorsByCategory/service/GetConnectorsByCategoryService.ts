import { ConnectorModel } from '../../../../models/ConnectorModel'
import { IConnectorRepository } from '../../../../repositories/connector/IConnectorRepository'

class GetConnectorsByCategoryService {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private connectorRepository: IConnectorRepository
  ) { }

  async execute (category: string): Promise<ConnectorModel[]> {
    return await this.connectorRepository.getConnectorsByCategory(category)
  }
}

export { GetConnectorsByCategoryService }

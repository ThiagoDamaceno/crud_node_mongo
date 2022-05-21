import { ConnectorModel } from '../../../../models/ConnectorModel'
import { IConnectorRepository } from '../../../../repositories/connector/IConnectorRepository'

class GetConnectorsByPrivacyService {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private connectorRepository: IConnectorRepository
  ) { }

  async execute (privacy: string): Promise<ConnectorModel[]> {
    return await this.connectorRepository.getConnectorsByPrivacy(privacy)
  }
}

export { GetConnectorsByPrivacyService }

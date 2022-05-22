import { ConnectorModel } from '../../../../models/ConnectorModel'
import { IConnectorRepository } from '../../../../repositories/connector/IConnectorRepository'
import { MissingAttributesError } from '../../../../utils/errors/MissingAttributesError'

class CreateConnectorService {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private connectorRepository: IConnectorRepository
  ) { }

  async execute (name: string, baseUrl: string, category: string, description: string, logoUrl: string, privacy: string, status: string, type: string): Promise<ConnectorModel | MissingAttributesError> {
    if (!name || !baseUrl || !category || !description || !logoUrl || !privacy || !status || !type) {
      return new MissingAttributesError()
    }

    const newConnector: ConnectorModel = new ConnectorModel({
      name,
      baseUrl,
      category,
      description,
      logoUrl,
      privacy,
      status,
      type
    })

    return await this.connectorRepository.createConnector(newConnector)
  }
}

export { CreateConnectorService }

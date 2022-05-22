import { ConnectorModel } from '../../../../models/ConnectorModel'
import { IConnectorRepository } from '../../../../repositories/connector/IConnectorRepository'
import { DataNotFoundError } from '../../../../utils/errors/DataNotFoundError'
import { InvalidUuidError } from '../../../../utils/errors/InvalidUuidError'
import { MissingAttributesError } from '../../../../utils/errors/MissingAttributesError'
import { Validator } from '../../../../utils/validator/Validator'

class UpdateConnectorService {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private connectorRepository: IConnectorRepository
  ) { }

  async execute (_id: string, name: string, baseUrl: string, category: string, description: string, logoUrl: string, privacy: string, status: string, type: string): Promise<ConnectorModel | DataNotFoundError | InvalidUuidError | MissingAttributesError> {
    if (!_id || !Validator.isUuid(_id)) {
      return new InvalidUuidError()
    }

    if (!name || !baseUrl || !category || !description || !logoUrl || !privacy || !status || !type) {
      return new MissingAttributesError()
    }

    if (await this.connectorRepository.getConnectorById(_id) === undefined) {
      return new DataNotFoundError()
    }

    const connector = new ConnectorModel({
      _id,
      name,
      baseUrl,
      category,
      description,
      logoUrl,
      privacy,
      status,
      type
    })

    return await this.connectorRepository.updateConnector(connector)
  }
}

export { UpdateConnectorService }

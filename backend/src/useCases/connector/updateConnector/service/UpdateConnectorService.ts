import { ConnectorModel, IConnectorModelAttributes } from '../../../../models/ConnectorModel'
import { IConnectorRepository } from '../../../../repositories/connector/IConnectorRepository'
import { InvalidUuidError } from '../../../../utils/errors/InvalidUuidError'
import { Validator } from '../../../../utils/validator/Validator'

class UpdateConnectorService {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private connectorRepository: IConnectorRepository
  ) { }

  async execute (connectorAttributes: IConnectorModelAttributes): Promise<ConnectorModel | InvalidUuidError> {
    if (!connectorAttributes._id || !Validator.isUuid(connectorAttributes._id)) {
      return new InvalidUuidError()
    }

    const connector = new ConnectorModel(connectorAttributes, { _id: connectorAttributes._id })

    return await this.connectorRepository.updateConnector(connector)
  }
}

export { UpdateConnectorService }

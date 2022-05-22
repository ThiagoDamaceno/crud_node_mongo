
import { ConnectorModel } from '../../../../models/ConnectorModel'
import { IConnectorRepository } from '../../../../repositories/connector/IConnectorRepository'
import { InvalidUuidError } from '../../../../utils/errors/InvalidUuidError'
import { Validator } from '../../../../utils/validator/Validator'

class GetConnectorByIdService {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private connectorRepository: IConnectorRepository
  ) { }

  async execute (_id: string): Promise<ConnectorModel | undefined | InvalidUuidError> {
    if (!Validator.isUuid(_id)) {
      return new InvalidUuidError()
    }

    return await this.connectorRepository.getConnectorById(_id)
  }
}

export { GetConnectorByIdService }

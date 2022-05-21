
import { IConnectorRepository } from '../../../../repositories/connector/IConnectorRepository'
import { InvalidUuidError } from '../../../../utils/errors/InvalidUuidError'
import { Validator } from '../../../../utils/validator/Validator'

class DeleteConnectorByIdService {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private connectorRepository: IConnectorRepository
  ) { }

  async execute (id: string): Promise<boolean | InvalidUuidError> {
    if (!Validator.isUuid(id)) {
      return new InvalidUuidError()
    }

    return await this.connectorRepository.deleteConnectorById(id)
  }
}

export { DeleteConnectorByIdService }

import { Request, Response } from 'express'
import { controllerResponse } from '../../../../utils/controllerResponse'
import { DeleteConnectorByIdService } from '../service/DeleteConnectorByIdService'

class DeleteConnectorByIdController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private deleteConnectorByIdService: DeleteConnectorByIdService
  ) { }

  async execute (request: Request, response: Response) {
    const { _id } = request.params

    const responseService = await this.deleteConnectorByIdService.execute(_id)

    return response.json(controllerResponse(responseService))
  }
}

export { DeleteConnectorByIdController }

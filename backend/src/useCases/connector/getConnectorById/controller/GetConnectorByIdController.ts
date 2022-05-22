import { Request, Response } from 'express'
import { controllerResponse } from '../../../../utils/controllerResponse'
import { GetConnectorByIdService } from '../service/GetConnectorByIdService'

class GetConnectorByIdController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private getConnectorByIdService: GetConnectorByIdService
  ) { }

  async execute (request: Request, response: Response) {
    const { _id } = request.params

    const responseService = await this.getConnectorByIdService.execute(_id)

    return response.json(controllerResponse(responseService))
  }
}

export { GetConnectorByIdController }

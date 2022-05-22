import { Request, Response } from 'express'
import { controllerResponse } from '../../../../utils/controllerResponse'
import { GetConnectorsByTypeService } from '../service/GetConnectorsByTypeService'

class GetConnectorsByTypeController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private getConnectorsByTypeService: GetConnectorsByTypeService
  ) { }

  async execute (request: Request, response: Response) {
    const { type } = request.params

    const responseService = await this.getConnectorsByTypeService.execute(type)

    return response.json(controllerResponse(responseService))
  }
}

export { GetConnectorsByTypeController }

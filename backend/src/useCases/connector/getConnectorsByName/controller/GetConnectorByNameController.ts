import { Request, Response } from 'express'
import { controllerResponse } from '../../../../utils/controllerResponse'
import { GetConnectorsByNameService } from '../service/GetConnectorsByNameService'

class GetConnectorByNameController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private getConnectorsByNameService: GetConnectorsByNameService
  ) { }

  async execute (request: Request, response: Response) {
    const { name } = request.params

    const responseService = await this.getConnectorsByNameService.execute(name)

    return response.json(controllerResponse(responseService))
  }
}

export { GetConnectorByNameController }

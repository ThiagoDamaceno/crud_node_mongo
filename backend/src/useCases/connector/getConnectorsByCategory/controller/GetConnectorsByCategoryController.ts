import { Request, Response } from 'express'
import { controllerResponse } from '../../../../utils/controllerResponse'
import { GetConnectorsByCategoryService } from '../service/GetConnectorsByCategoryService'

class GetConnectorsByCategoryController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private getConnectorsByCategoryService: GetConnectorsByCategoryService
  ) { }

  async execute (request: Request, response: Response) {
    const { category } = request.params

    const responseService = await this.getConnectorsByCategoryService.execute(category)

    return response.json(controllerResponse(responseService))
  }
}

export { GetConnectorsByCategoryController }

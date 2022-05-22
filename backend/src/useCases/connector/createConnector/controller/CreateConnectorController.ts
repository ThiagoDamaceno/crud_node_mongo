import { Request, Response } from 'express'
import { controllerResponse } from '../../../../utils/controllerResponse'
import { CreateConnectorService } from '../service/CreateConnectorService'

class CreateConnectorController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private createConnectorService: CreateConnectorService
  ) { }

  async execute (request: Request, response: Response) {
    const body = request.body

    const responseService: any = await this.createConnectorService.execute(
      body.name,
      body.baseUrl,
      body.category,
      body.description,
      body.logoUrl,
      body.privacy,
      body.status,
      body.type
    )
    return response.json(controllerResponse(responseService))
  }
}

export { CreateConnectorController }

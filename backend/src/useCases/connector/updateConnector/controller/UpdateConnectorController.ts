import { Request, Response } from 'express'
import { controllerResponse } from '../../../../utils/controllerResponse'
import { UpdateConnectorService } from '../service/UpdateConnectorService'

class UpdateConnectorController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private updateConnectorService: UpdateConnectorService
  ) { }

  async execute (request: Request, response: Response) {
    const body = request.body

    const responseService: any = await this.updateConnectorService.execute(
      body._id,
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

export { UpdateConnectorController }

import { Request, Response } from 'express'
import { controllerResponse } from '../../../../utils/controllerResponse'
import { GetConnectorsByPrivacyService } from '../service/GetConnectorsByPrivacyService'

class GetConnectorsByPrivacyController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private getConnectorsByPrivacyService: GetConnectorsByPrivacyService
  ) { }

  async execute (request: Request, response: Response) {
    const { privacy } = request.params

    const responseService = await this.getConnectorsByPrivacyService.execute(privacy)

    return response.json(controllerResponse(responseService))
  }
}

export { GetConnectorsByPrivacyController }

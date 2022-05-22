import { Request, Response } from 'express'
import { controllerResponse } from '../../../../utils/controllerResponse'
import { GetConnectorsService } from '../service/GetConnectorsService'

class GetConnectorsController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private getConnectorsService: GetConnectorsService
  ) { }

  async execute (request: Request, response: Response) {
    const responseService = await this.getConnectorsService.execute()
    return response.json(controllerResponse(responseService))
  }
}

export { GetConnectorsController }

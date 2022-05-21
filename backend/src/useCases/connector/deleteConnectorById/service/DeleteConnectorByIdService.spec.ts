import { IConnectorModelAttributes } from '../../../../models/ConnectorModel'
import { ConnectorRepositoryInMemory } from '../../../../repositories/connector/inMemory/ConnectorRepositoryInMemory'
import { CreateConnectorService } from '../../createConnector/service/CreateConnectorService'
import { GetConnectorByIdService } from '../../getConnectorById/service/GetConnectorByIdService'
import { DeleteConnectorByIdService } from './DeleteConnectorByIdService'

/* eslint-disable no-undef */
describe('DeleteConnectorByIdService test', () => {
  it('Should be able to delete a connector by id using the service', async () => {
    const dataForTestWithoutId: IConnectorModelAttributes = {
      baseUrl: 'ba',
      category: 'ca',
      description: 'de',
      logoUrl: 'lo',
      name: 'na',
      privacy: 'pi',
      status: 'st',
      type: 'ty'
    }
    const repositoryInMemory = new ConnectorRepositoryInMemory()
    const serviceDeleteById = new DeleteConnectorByIdService(repositoryInMemory)

    const responseCreate = await new CreateConnectorService(repositoryInMemory).execute(dataForTestWithoutId)

    const serviceGetById = new GetConnectorByIdService(repositoryInMemory)

    expect(await serviceGetById.execute(responseCreate.getId())).not.toBe(undefined)

    expect(await serviceDeleteById.execute(responseCreate.getId())).toBe(true)

    expect(await serviceGetById.execute(responseCreate.getId())).toBe(undefined)
  })
})

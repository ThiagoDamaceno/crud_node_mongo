import { IConnectorModelAttributes } from '../../../../models/ConnectorModel'
import { ConnectorRepositoryInMemory } from '../../../../repositories/connector/inMemory/ConnectorRepositoryInMemory'
import { CreateConnectorService } from '../../createConnector/service/CreateConnectorService'
import { GetConnectorsByCategoryService } from './GetConnectorsByCategoryService'

/* eslint-disable no-undef */
describe('GetConnectorsByCategoryService test', () => {
  it('Should be able to get the connectors by category using the service', async () => {
    const category = 'ty'
    const dataForTestWithoutId: IConnectorModelAttributes = {
      baseUrl: 'ba',
      category,
      description: 'de',
      logoUrl: 'lo',
      name: 'na',
      privacy: 'pr',
      status: 'st',
      type: 'ty'
    }

    const dataForTestWithoutIdTwo: IConnectorModelAttributes = {
      baseUrl: 'ba2',
      category,
      description: 'de2',
      logoUrl: 'lo2',
      name: 'na2',
      privacy: 'pr2',
      status: 'st2',
      type: 'ty2'
    }

    const repositoryInMemory = new ConnectorRepositoryInMemory()
    const service = new GetConnectorsByCategoryService(repositoryInMemory)

    const responseBefore = await service.execute(category)
    const countResponseBefore = responseBefore.length

    await new CreateConnectorService(repositoryInMemory).execute(dataForTestWithoutId)
    await new CreateConnectorService(repositoryInMemory).execute(dataForTestWithoutIdTwo)

    const responseAfter = await service.execute(category)
    const countResponseAfter = responseAfter.length

    expect(countResponseBefore + 2).toBe(countResponseAfter)
  })
})

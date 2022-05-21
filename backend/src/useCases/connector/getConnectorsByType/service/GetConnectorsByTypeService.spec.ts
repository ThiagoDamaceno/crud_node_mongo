import { IConnectorModelAttributes } from '../../../../models/ConnectorModel'
import { ConnectorRepositoryInMemory } from '../../../../repositories/connector/inMemory/ConnectorRepositoryInMemory'
import { CreateConnectorService } from '../../createConnector/service/CreateConnectorService'
import { GetConnectorsByTypeService } from './GetConnectorsByTypeService'

/* eslint-disable no-undef */
describe('GetConnectorsByTypeService test', () => {
  it('Should be able to get the connectors by type using the service', async () => {
    const type = 'ty'
    const dataForTestWithoutId: IConnectorModelAttributes = {
      baseUrl: 'ba',
      category: 'ca',
      description: 'de',
      logoUrl: 'lo',
      name: 'na',
      privacy: 'pi',
      status: 'st',
      type
    }

    const dataForTestWithoutIdTwo: IConnectorModelAttributes = {
      baseUrl: 'ba2',
      category: 'ca2',
      description: 'de2',
      logoUrl: 'lo2',
      name: 'na2',
      privacy: 'pi2',
      status: 'st2',
      type
    }

    const repositoryInMemory = new ConnectorRepositoryInMemory()
    const service = new GetConnectorsByTypeService(repositoryInMemory)

    const responseBefore = await service.execute(type)
    const countResponseBefore = responseBefore.length

    await new CreateConnectorService(repositoryInMemory).execute(dataForTestWithoutId)
    await new CreateConnectorService(repositoryInMemory).execute(dataForTestWithoutIdTwo)

    const responseAfter = await service.execute(type)
    const countResponseAfter = responseAfter.length

    expect(countResponseBefore + 2).toBe(countResponseAfter)
  })
})

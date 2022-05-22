import { IConnectorModelAttributes } from '../../../../models/ConnectorModel'
import { ConnectorRepositoryInMemory } from '../../../../repositories/connector/inMemory/ConnectorRepositoryInMemory'
import { CreateConnectorService } from '../../createConnector/service/CreateConnectorService'
import { GetConnectorsByNameService } from './GetConnectorsByNameService'

/* eslint-disable no-undef */
describe('GetConnectorsByNameService test', () => {
  it('Should be able to get the connectors by name using the service', async () => {
    const name = 'na'
    const dataForTestWithoutId: IConnectorModelAttributes = {
      baseUrl: 'ba',
      category: 'ca',
      description: 'de',
      logoUrl: 'lo',
      name,
      privacy: 'pi',
      status: 'st',
      type: 'ty'
    }

    const dataForTestWithoutIdTwo: IConnectorModelAttributes = {
      baseUrl: 'ba2',
      category: 'ca2',
      description: 'de2',
      logoUrl: 'lo2',
      name,
      privacy: 'pi2',
      status: 'st2',
      type: 'ty2'
    }

    const repositoryInMemory = new ConnectorRepositoryInMemory()
    const service = new GetConnectorsByNameService(repositoryInMemory)

    const responseBefore = await service.execute(name)
    const countResponseBefore = responseBefore.length

    await new CreateConnectorService(repositoryInMemory).execute(
      dataForTestWithoutId.name,
      dataForTestWithoutId.baseUrl,
      dataForTestWithoutId.category,
      dataForTestWithoutId.description,
      dataForTestWithoutId.logoUrl,
      dataForTestWithoutId.privacy,
      dataForTestWithoutId.status,
      dataForTestWithoutId.type
    )
    await new CreateConnectorService(repositoryInMemory).execute(
      dataForTestWithoutIdTwo.name,
      dataForTestWithoutIdTwo.baseUrl,
      dataForTestWithoutIdTwo.category,
      dataForTestWithoutIdTwo.description,
      dataForTestWithoutIdTwo.logoUrl,
      dataForTestWithoutIdTwo.privacy,
      dataForTestWithoutIdTwo.status,
      dataForTestWithoutIdTwo.type
    )

    const responseAfter = await service.execute(name)
    const countResponseAfter = responseAfter.length

    expect(countResponseBefore + 2).toBe(countResponseAfter)
  })
})

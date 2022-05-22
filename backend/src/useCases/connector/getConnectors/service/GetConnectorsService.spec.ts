import { IConnectorModelAttributes } from '../../../../models/ConnectorModel'
import { ConnectorRepositoryInMemory } from '../../../../repositories/connector/inMemory/ConnectorRepositoryInMemory'
import { CreateConnectorService } from '../../createConnector/service/CreateConnectorService'
import { GetConnectorsService } from './GetConnectorsService'

/* eslint-disable no-undef */
describe('GetConnectorsService test', () => {
  it('Should be able to get the connectors using the service', async () => {
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
    const service = new GetConnectorsService(repositoryInMemory)

    const responseBefore = await service.execute()
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

    const responseAfter = await service.execute()
    const countResponseAfter = responseAfter.length

    expect(countResponseBefore + 1).toBe(countResponseAfter)
  })
})

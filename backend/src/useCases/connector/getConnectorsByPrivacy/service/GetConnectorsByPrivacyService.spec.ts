import { IConnectorModelAttributes } from '../../../../models/ConnectorModel'
import { ConnectorRepositoryInMemory } from '../../../../repositories/connector/inMemory/ConnectorRepositoryInMemory'
import { CreateConnectorService } from '../../createConnector/service/CreateConnectorService'
import { GetConnectorsByPrivacyService } from './GetConnectorsByPrivacyService'

/* eslint-disable no-undef */
describe('GetConnectorsByPrivacyService test', () => {
  it('Should be able to get the connectors by privacy using the service', async () => {
    const privacy = 'ty'
    const dataForTestWithoutId: IConnectorModelAttributes = {
      baseUrl: 'ba',
      category: 'ca',
      description: 'de',
      logoUrl: 'lo',
      name: 'na',
      privacy,
      status: 'st',
      type: 'ty'
    }

    const dataForTestWithoutIdTwo: IConnectorModelAttributes = {
      baseUrl: 'ba2',
      category: 'ca2',
      description: 'de2',
      logoUrl: 'lo2',
      name: 'na2',
      privacy,
      status: 'st2',
      type: 'ty2'
    }

    const repositoryInMemory = new ConnectorRepositoryInMemory()
    const service = new GetConnectorsByPrivacyService(repositoryInMemory)

    const responseBefore = await service.execute(privacy)
    const countResponseBefore = responseBefore.length

    await new CreateConnectorService(repositoryInMemory).execute(dataForTestWithoutId)
    await new CreateConnectorService(repositoryInMemory).execute(dataForTestWithoutIdTwo)

    const responseAfter = await service.execute(privacy)
    const countResponseAfter = responseAfter.length

    expect(countResponseBefore + 2).toBe(countResponseAfter)
  })
})

import { IConnectorModelAttributes } from '../../../../models/ConnectorModel'
import { ConnectorRepositoryInMemory } from '../../../../repositories/connector/inMemory/ConnectorRepositoryInMemory'
import { CreateConnectorService } from './CreateConnectorService'

/* eslint-disable no-undef */
describe('CreateConnectorService test', () => {
  it('Should be able to create a connector using the service', async () => {
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

    const service: any = new CreateConnectorService(new ConnectorRepositoryInMemory())

    const response = await service.execute(
      dataForTestWithoutId.name,
      dataForTestWithoutId.baseUrl,
      dataForTestWithoutId.category,
      dataForTestWithoutId.description,
      dataForTestWithoutId.logoUrl,
      dataForTestWithoutId.privacy,
      dataForTestWithoutId.status,
      dataForTestWithoutId.type
    )
    expect(response.getId()).not.toBeUndefined()
  })
})

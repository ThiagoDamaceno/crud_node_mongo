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

    const service = new CreateConnectorService(new ConnectorRepositoryInMemory())

    const response = await service.execute(dataForTestWithoutId)
    expect(response.getId()).not.toBeUndefined()
  })
})

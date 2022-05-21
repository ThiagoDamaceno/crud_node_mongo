import { ConnectorModel, IConnectorModelAttributes } from '../../../../models/ConnectorModel'
import { ConnectorRepositoryInMemory } from '../../../../repositories/connector/inMemory/ConnectorRepositoryInMemory'
import { CreateConnectorService } from '../../createConnector/service/CreateConnectorService'
import { GetConnectorByIdService } from '../../getConnectorById/service/GetConnectorByIdService'
import { UpdateConnectorService } from './UpdateConnectorService'

/* eslint-disable no-undef */
describe('UpdateConnectorService test', () => {
  it('Should be able to update a connector using the service', async () => {
    let dataForTestWithoutId: IConnectorModelAttributes = {
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
    const serviceUpdate = new UpdateConnectorService(repositoryInMemory)

    const connector = await new CreateConnectorService(repositoryInMemory).execute(dataForTestWithoutId)

    dataForTestWithoutId = { ...dataForTestWithoutId, _id: connector.getId() }

    const newName = 'New name'
    dataForTestWithoutId.name = newName

    expect(await serviceUpdate.execute(dataForTestWithoutId)).toBeInstanceOf(ConnectorModel)

    const responseGetById: any | ConnectorModel = await new GetConnectorByIdService(repositoryInMemory).execute(connector.getId())

    expect(responseGetById?.name).toBe(dataForTestWithoutId.name)
    expect(responseGetById.getId()).toBe(dataForTestWithoutId._id)
  })
})

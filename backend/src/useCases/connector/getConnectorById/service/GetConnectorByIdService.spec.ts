import { ConnectorModel, IConnectorModelAttributes } from '../../../../models/ConnectorModel'
import { ConnectorRepositoryInMemory } from '../../../../repositories/connector/inMemory/ConnectorRepositoryInMemory'
import { InvalidUuidError } from '../../../../utils/errors/InvalidUuidError'
import { Generator } from '../../../../utils/generator/Generator'
import { CreateConnectorService } from '../../createConnector/service/CreateConnectorService'
import { GetConnectorByIdService } from './GetConnectorByIdService'

/* eslint-disable no-undef */
describe('GetConnectorByIdService test', () => {
  it('Should be able to get a connector by id using the service', async () => {
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

    const service = new GetConnectorByIdService(repositoryInMemory)

    const responseCreate = await new CreateConnectorService(repositoryInMemory).execute(dataForTestWithoutId)

    const responseGetById: any = await service.execute(responseCreate.getId())

    expect(responseCreate).toBeInstanceOf(ConnectorModel)
    expect(responseCreate.getId()).toBe(responseGetById.getId())
    expect(responseCreate.name).toBe(responseGetById.name)
    expect(responseCreate.baseUrl).toBe(responseGetById.baseUrl)
    expect(responseCreate.category).toBe(responseGetById.category)
    expect(responseCreate.description).toBe(responseGetById.description)
    expect(responseCreate.logoUrl).toBe(responseGetById.logoUrl)
    expect(responseCreate.privacy).toBe(responseGetById.privacy)
    expect(responseCreate.status).toBe(responseGetById.status)
    expect(responseCreate.type).toBe(responseGetById.type)

    expect(await service.execute(responseGetById.getId() + '123')).toBeInstanceOf(InvalidUuidError)

    expect(await service.execute(Generator.uuidv4())).toBe(undefined)
  })
})

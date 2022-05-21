import { Generator } from '../utils/Generator'
import { ConnectorModel, IConnectorModelAttributes } from './ConnectorModel'

/* eslint-disable no-undef */
describe('ConnectorModel Test', () => {
  it('Should be able to create a connector with an existing id', () => {
    const id = Generator.uuidv4()
    const connectorAttributes: IConnectorModelAttributes = {
      name: 'na',
      baseUrl: 'bu',
      catagory: 'ca',
      description: 'de',
      logoUrl: 'lu',
      privacy: 'pr',
      status: 'st',
      type: 'ty'
    }
    const connector = new ConnectorModel(connectorAttributes)

    expect(connector.name).toBe(connectorAttributes.name)
    expect(connector.baseUrl).toBe(connectorAttributes.baseUrl)
    expect(connector.catagory).toBe(connectorAttributes.catagory)
    expect(connector.description).toBe(connectorAttributes.description)
    expect(connector.logoUrl).toBe(connectorAttributes.logoUrl)
    expect(connector.privacy).toBe(connectorAttributes.privacy)
    expect(connector.status).toBe(connectorAttributes.status)
    expect(connector.type).toBe(connectorAttributes.type)
    expect(connector._id).not.toBe(id)
  })

  it('Should be able to create a connector without an existing id', () => {
    const id = Generator.uuidv4()

    const connectorAttributes: IConnectorModelAttributes = {
      name: 'na',
      baseUrl: 'bu',
      catagory: 'ca',
      description: 'de',
      logoUrl: 'lu',
      privacy: 'pr',
      status: 'st',
      type: 'ty'
    }

    const connectorTwo = new ConnectorModel(connectorAttributes, { _id: id })

    expect(connectorTwo.name).toBe(connectorAttributes.name)
    expect(connectorTwo.baseUrl).toBe(connectorAttributes.baseUrl)
    expect(connectorTwo.catagory).toBe(connectorAttributes.catagory)
    expect(connectorTwo.description).toBe(connectorAttributes.description)
    expect(connectorTwo.logoUrl).toBe(connectorAttributes.logoUrl)
    expect(connectorTwo.privacy).toBe(connectorAttributes.privacy)
    expect(connectorTwo.status).toBe(connectorAttributes.status)
    expect(connectorTwo.type).toBe(connectorAttributes.type)
    expect(connectorTwo._id).toBe(id)
  })
})

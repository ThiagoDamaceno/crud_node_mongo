/* eslint-disable no-undef */

import { ConnectorModel } from '../../models/ConnectorModel'
import { Generator } from '../../utils/generator/Generator'
import { IConnectorRepository } from './IConnectorRepository'

export default (connectorRepository: IConnectorRepository) => {
  it('Should be able to create a connector', async () => {
    const connector = new ConnectorModel({
      name: 'na',
      baseUrl: 'bu',
      category: 'ca',
      description: 'de',
      logoUrl: 'lu',
      privacy: 'pr',
      status: 'st',
      type: 'ty'
    })

    expect(await connectorRepository.createConnector(connector)).toEqual(connector)
  })

  it('Should be able to get connection by id', async () => {
    const connector = new ConnectorModel({
      name: 'na',
      baseUrl: 'bu',
      category: 'ca',
      description: 'de',
      logoUrl: 'lu',
      privacy: 'pr',
      status: 'st',
      type: 'ty'
    })

    expect(await connectorRepository.createConnector(connector)).toEqual(connector)

    const responseGetById = await connectorRepository.getConnectorById(connector.getId())

    expect(responseGetById).not.toBeUndefined()
    expect(connector.getId()).toBe(responseGetById!.getId())
    expect(connector.name).toBe(responseGetById!.name)
    expect(await connectorRepository.getConnectorById(Generator.uuidv4())).toBeUndefined()
  })

  it('Should be able to get connections by category', async () => {
    const category = 'ca'

    const numberOfConnectorsByCategoryBefore = (await connectorRepository.getConnectorsByCategory(category)).length

    const connectorOne = new ConnectorModel({
      name: 'na',
      baseUrl: 'bu',
      category: 'ca',
      description: 'de',
      logoUrl: 'lu',
      privacy: 'pr',
      status: 'st',
      type: 'ty'
    })

    const connectorTwo = new ConnectorModel({
      name: 'na2',
      baseUrl: 'bu2',
      category: 'ca',
      description: 'de2',
      logoUrl: 'lu2',
      privacy: 'pr2',
      status: 'st2',
      type: 'ty2'
    })

    await connectorRepository.createConnector(connectorOne)
    await connectorRepository.createConnector(connectorTwo)

    const responseGetConnectorsByCategory = await connectorRepository.getConnectorsByCategory(category)
    expect(responseGetConnectorsByCategory.length).toBe(numberOfConnectorsByCategoryBefore + 2)
  })

  it('Should be able to get connections by name', async () => {
    const name = 'na'

    const numberOfConnectorsByNameBefore = (await connectorRepository.getConnectorsByName(name)).length

    const connectorOne = new ConnectorModel({
      name: 'na',
      baseUrl: 'bu',
      category: 'ca',
      description: 'de',
      logoUrl: 'lu',
      privacy: 'pr',
      status: 'st',
      type: 'ty'
    })

    const connectorTwo = new ConnectorModel({
      name: 'na',
      baseUrl: 'bu2',
      category: 'ca2',
      description: 'de2',
      logoUrl: 'lu2',
      privacy: 'pr2',
      status: 'st2',
      type: 'ty2'
    })

    await connectorRepository.createConnector(connectorOne)
    await connectorRepository.createConnector(connectorTwo)

    const responseGetConnectorsByName = await connectorRepository.getConnectorsByName(name)
    expect(responseGetConnectorsByName.length).toBe(numberOfConnectorsByNameBefore + 2)
  })

  it('Should be able to get connections by privacy', async () => {
    const privacy = 'pr'

    const numberOfConnectorsByPrivacyBefore = (await connectorRepository.getConnectorsByPrivacy(privacy)).length

    const connectorOne = new ConnectorModel({
      name: 'na',
      baseUrl: 'bu',
      category: 'ca',
      description: 'de',
      logoUrl: 'lu',
      privacy: 'pr',
      status: 'st',
      type: 'ty'
    })

    const connectorTwo = new ConnectorModel({
      name: 'na2',
      baseUrl: 'bu2',
      category: 'ca2',
      description: 'de2',
      logoUrl: 'lu2',
      privacy: 'pr',
      status: 'st2',
      type: 'ty2'
    })

    await connectorRepository.createConnector(connectorOne)
    await connectorRepository.createConnector(connectorTwo)

    const responseGetConnectorsByPrivacy = await connectorRepository.getConnectorsByPrivacy(privacy)
    expect(responseGetConnectorsByPrivacy.length).toBe(numberOfConnectorsByPrivacyBefore + 2)
  })

  it('Should be able to get connections by type', async () => {
    const type = 'ty'

    const numberOfConnectorsByTypeBefore = (await connectorRepository.getConnectorsByType(type)).length

    const connectorOne = new ConnectorModel({
      name: 'na',
      baseUrl: 'bu',
      category: 'ca',
      description: 'de',
      logoUrl: 'lu',
      privacy: 'pr',
      status: 'st',
      type: 'ty'
    })

    const connectorTwo = new ConnectorModel({
      name: 'na2',
      baseUrl: 'bu2',
      category: 'ca2',
      description: 'de2',
      logoUrl: 'lu2',
      privacy: 'pr2',
      status: 'st2',
      type: 'ty'
    })

    await connectorRepository.createConnector(connectorOne)
    await connectorRepository.createConnector(connectorTwo)

    const responseGetConnectorsByType = await connectorRepository.getConnectorsByType(type)
    expect(responseGetConnectorsByType.length).toBe(numberOfConnectorsByTypeBefore + 2)
  })

  it('Should be able to delete a connector by id', async () => {
    const connector = new ConnectorModel({
      name: 'na',
      baseUrl: 'bu',
      category: 'ca',
      description: 'de',
      logoUrl: 'lu',
      privacy: 'pr',
      status: 'st',
      type: 'ty'
    })

    await connectorRepository.createConnector(connector)

    expect(await connectorRepository.deleteConnectorById(connector.getId())).toBe(true)

    expect(await connectorRepository.getConnectorById(connector.getId())).toBeUndefined()

    expect(await connectorRepository.deleteConnectorById(connector.getId())).toBe(false)
  })

  it('Should be able to update a connector', async () => {
    const connector = new ConnectorModel({
      name: 'na',
      baseUrl: 'bu',
      category: 'ca',
      description: 'de',
      logoUrl: 'lu',
      privacy: 'pr',
      status: 'st',
      type: 'ty'
    })

    await connectorRepository.createConnector(connector)
    const newName = 'na2'
    const newStatus = 'st2'

    connector.name = newName
    connector.status = newStatus

    const responseUpdate = await connectorRepository.updateConnector(connector)

    expect(responseUpdate.name).toBe(newName)
    expect(responseUpdate.status).toBe(newStatus)

    const responseGetById = await connectorRepository.getConnectorById(connector.getId())

    expect(responseGetById!.name).toBe(newName)
    expect(responseGetById!.status).toBe(newStatus)
  })
}

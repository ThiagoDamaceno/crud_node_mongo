import { ConnectorModel } from '../../../models/ConnectorModel'
import { ConnectorRepositoryMongo } from '../../../repositories/connector/mongo/ConnectorRepositoryMongo'

const connectors: ConnectorModel[] = []

connectors.push(new ConnectorModel({
  name: 'Connector 1',
  baseUrl: 'https://www.google.com/',
  category: 'Test',
  description: 'Test seeders 1',
  logoUrl: 'https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn',
  privacy: 'public',
  status: '-',
  type: 'test'
}))

connectors.push(new ConnectorModel({
  name: 'Connector 2',
  baseUrl: 'https://www.google.com/',
  category: 'Test 2',
  description: 'Test seeders 2',
  logoUrl: 'https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn',
  privacy: 'public',
  status: '-',
  type: 'test 2'
}))

connectors.push(new ConnectorModel({
  name: 'Connector 3',
  baseUrl: 'https://www.google.com/',
  category: 'Test 3',
  description: 'Test seeders 3',
  logoUrl: 'https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn',
  privacy: 'public',
  status: '-',
  type: 'test 3'
}))

connectors.push(new ConnectorModel({
  name: 'Connector 4',
  baseUrl: 'https://www.google.com/',
  category: 'Test 4',
  description: 'Test seeders 4',
  logoUrl: 'https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn',
  privacy: 'public',
  status: '-',
  type: 'test 4'
}))

async function connectorSeeder () {
  const repository = new ConnectorRepositoryMongo()
  connectors.forEach(async connector => {
    await repository.createConnector(connector)
  })

  console.log('Connectors seeders inserted.')
}

export { connectorSeeder }

import { ConnectorModel } from '../../../models/ConnectorModel'
import { IConnectorRepository } from '../IConnectorRepository'

class ConnectorRepositoryInMemory implements IConnectorRepository {
  private connectors: ConnectorModel[] = []

  async createConnector (connectorModel: ConnectorModel): Promise<ConnectorModel> {
    this.connectors.push(connectorModel)
    return connectorModel
  }

  async deleteConnectorById (id: string): Promise<boolean> {
    const countConnectorsBefore = this.connectors.length

    this.connectors = this.connectors.filter(connector => connector.getId() !== id)

    const countConnectorsAfter = this.connectors.length

    return countConnectorsBefore > countConnectorsAfter
  }

  async getConnectorById (id: string): Promise<ConnectorModel | undefined> {
    return this.connectors.find(connector => connector.getId() === id)
  }

  async getConnectors (): Promise<ConnectorModel[]> {
    return this.connectors
  }

  async getConnectorsByCategory (category: string): Promise<ConnectorModel[]> {
    return this.connectors.filter(connector => connector.category === category)
  }

  async getConnectorsByName (name: string): Promise<ConnectorModel[]> {
    return this.connectors.filter(connector => connector.name === name)
  }

  async getConnectorsByPrivacy (privacy: string): Promise<ConnectorModel[]> {
    return this.connectors.filter(connector => connector.privacy === privacy)
  }

  async getConnectorsByType (type: string): Promise<ConnectorModel[]> {
    return this.connectors.filter(connector => connector.type === type)
  }

  async updateConnector (connectorModel: ConnectorModel): Promise<ConnectorModel> {
    for (let i = 0; i < this.connectors.length; i++) {
      if (this.connectors[i].getId() === connectorModel.getId()) {
        this.connectors[i] = connectorModel
        break
      }
    }

    return connectorModel
  }
}

export { ConnectorRepositoryInMemory }

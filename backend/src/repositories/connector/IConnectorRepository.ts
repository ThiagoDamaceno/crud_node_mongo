import { ConnectorModel } from '../../models/ConnectorModel'

interface IConnectorRepository {
  createConnector (connectorModel: ConnectorModel): Promise<ConnectorModel>
  deleteConnectorById (id: string): Promise<boolean>
  getConnectorById (id: string): Promise<ConnectorModel | undefined>
  getConnectors (): Promise<ConnectorModel[]>
  getConnectorsByCategory (category: string): Promise<ConnectorModel[]>
  getConnectorsByName (name: string): Promise<ConnectorModel[]>
  getConnectorsByPrivacy (privacy: string): Promise<ConnectorModel[]>
  getConnectorsByType (type: string): Promise<ConnectorModel[]>
  updateConnector (connectorModel: ConnectorModel): Promise<ConnectorModel>
}

export { IConnectorRepository }

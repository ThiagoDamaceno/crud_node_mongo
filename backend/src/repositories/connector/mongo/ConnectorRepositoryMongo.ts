import { ConnectorModelMongo } from '../../../databases/mongo/schemas/ConnectorSchemaMongo'
import { ConnectorModel, IConnectorModelAttributes } from '../../../models/ConnectorModel'
import { IConnectorRepository } from '../IConnectorRepository'

class ConnectorRepositoryMongo implements IConnectorRepository {
  async createConnector (connectorModel: ConnectorModel): Promise<ConnectorModel> {
    const connectorMongo = new ConnectorModelMongo(connectorModel)

    try {
      await connectorMongo.save()
    } catch (err) {
      throw new Error(err as any)
    }

    return connectorModel
  }

  async deleteConnectorById (id: string): Promise<boolean> {
    let deleted: boolean = false

    try {
      const response = (await ConnectorModelMongo.deleteOne({
        _id: id
      }))
      deleted = response.deletedCount > 0
    } catch (err) {
      throw new Error(err as any)
    }

    return deleted
  }

  async getConnectorById (id: string): Promise<ConnectorModel | undefined> {
    let connectorMongo: IConnectorModelAttributes | null

    try {
      connectorMongo = await ConnectorModelMongo.findOne({
        _id: id
      })
    } catch (err) {
      throw new Error(err as any)
    }

    if (connectorMongo === null) return undefined

    return new ConnectorModel(connectorMongo)
  }

  async getConnectors (): Promise<ConnectorModel[]> {
    return await this.getConnectorsBy({})
  }

  async getConnectorsByCategory (category: string): Promise<ConnectorModel[]> {
    return await this.getConnectorsBy({ category })
  }

  async getConnectorsByName (name: string): Promise<ConnectorModel[]> {
    return await this.getConnectorsBy({ name })
  }

  async getConnectorsByPrivacy (privacy: string): Promise<ConnectorModel[]> {
    return await this.getConnectorsBy({ privacy })
  }

  async getConnectorsByType (type: string): Promise<ConnectorModel[]> {
    return await this.getConnectorsBy({ type })
  }

  async updateConnector (connectorModel: ConnectorModel): Promise<ConnectorModel> {
    await ConnectorModelMongo.updateOne({
      _id: connectorModel.getId()
    }, {
      $set: {
        baseUrl: connectorModel.baseUrl,
        category: connectorModel.category,
        description: connectorModel.description,
        logoUrl: connectorModel.logoUrl,
        name: connectorModel.name,
        privacy: connectorModel.privacy,
        status: connectorModel.status,
        type: connectorModel.type
      }
    })

    return connectorModel
  }

  private async getConnectorsBy (objectToQuery: Object): Promise<ConnectorModel[]> {
    let connectorsMongo: IConnectorModelAttributes[]

    try {
      connectorsMongo = await ConnectorModelMongo.find(objectToQuery)
    } catch (err) {
      throw new Error(err as any)
    }
    return connectorsMongo.map(connectorMongo => new ConnectorModel(connectorMongo))
  }
}

export { ConnectorRepositoryMongo }

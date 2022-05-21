import { AbstractModel, IAbstractModelAttributes } from './AbstractModel'

interface IConnectorModelAttributes extends IAbstractModelAttributes {
  name: string
  type: string
  privacy: string
  baseUrl: string
  logoUrl: string
  category: string
  description: string
  status: string
}

class ConnectorModel extends AbstractModel {
  name: string
  type: string
  privacy: string
  baseUrl: string
  logoUrl: string
  category: string
  description: string
  status: string

  constructor (connectorModelAttributes: IConnectorModelAttributes, abstractModelAttributes?: IAbstractModelAttributes) {
    super(abstractModelAttributes ?? {})

    this.name = connectorModelAttributes.name
    this.type = connectorModelAttributes.type
    this.privacy = connectorModelAttributes.privacy
    this.baseUrl = connectorModelAttributes.baseUrl
    this.logoUrl = connectorModelAttributes.logoUrl
    this.category = connectorModelAttributes.category
    this.description = connectorModelAttributes.description
    this.status = connectorModelAttributes.status
  }
}

export { IConnectorModelAttributes, ConnectorModel }

import { AbstractModel, IAbstractModelAttributes } from './AbstractModel'

interface IConnectorModelAttributes {
  name: string
  type: string
  privacy: string
  baseUrl: string
  logoUrl: string
  catagory: string
  description: string
  status: string
}

class ConnectorModel extends AbstractModel implements IConnectorModelAttributes {
  name: string
  type: string
  privacy: string
  baseUrl: string
  logoUrl: string
  catagory: string
  description: string
  status: string

  constructor (connectorModelAttributes: IConnectorModelAttributes, abstractModelAttributes: IAbstractModelAttributes) {
    super(abstractModelAttributes)

    this.name = connectorModelAttributes.name
    this.type = connectorModelAttributes.type
    this.privacy = connectorModelAttributes.privacy
    this.baseUrl = connectorModelAttributes.baseUrl
    this.logoUrl = connectorModelAttributes.logoUrl
    this.catagory = connectorModelAttributes.catagory
    this.description = connectorModelAttributes.description
    this.status = connectorModelAttributes.status
  }
}

export { ConnectorModel }

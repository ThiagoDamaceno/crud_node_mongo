import { model, Schema } from 'mongoose'
import { IConnectorModelAttributes } from '../../../models/ConnectorModel'

const connectorSchemaMongo = new Schema<IConnectorModelAttributes>({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  baseUrl: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  logoUrl: { type: String, required: true },
  privacy: { type: String, required: true },
  status: { type: String, required: true },
  type: { type: String, required: true }
})

const ConnectorModelMongo = model<IConnectorModelAttributes>('Connector', connectorSchemaMongo)
type ConnectorModelMongoType = typeof ConnectorModelMongo

export { ConnectorModelMongo, ConnectorModelMongoType }

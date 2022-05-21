/* eslint-disable no-undef */

import connectorRepositorySchema from '../ConnectorRepository.spec.schema'
import { ConnectorRepositoryInMemory } from './ConnectorRepositoryInMemory'

describe('ConnectorRepositoryInMemory test', () => connectorRepositorySchema(new ConnectorRepositoryInMemory()))

import { ERRORS_MESSAGES } from './ERRORS_MESSAGES'

class MissingAttributesError extends Error {
  constructor () {
    super(ERRORS_MESSAGES.MISSING.ATTRIBUTES)
  }
}

export { MissingAttributesError }

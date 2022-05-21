import { ERRORS_MESSAGES } from './ERRORS_MESSAGES'

class InvalidUuidError extends Error {
  constructor () {
    super(ERRORS_MESSAGES.INVALID.ID)
  }
}

export { InvalidUuidError }

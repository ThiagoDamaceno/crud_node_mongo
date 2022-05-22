import { ERRORS_MESSAGES } from './ERRORS_MESSAGES'

class DataNotFoundError extends Error {
  constructor () {
    super(ERRORS_MESSAGES.NOT_FOUND.DATA)
  }
}

export { DataNotFoundError }

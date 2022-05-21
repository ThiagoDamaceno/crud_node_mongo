import { validate } from 'uuid'

/* eslint-disable no-useless-constructor */
class Validator {
  private constructor () {}

  static isUuid (uuid: string): boolean {
    return validate(uuid)
  }
}

export { Validator }

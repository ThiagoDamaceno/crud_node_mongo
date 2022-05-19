import { v4 } from 'uuid'

class Generator {
  // eslint-disable-next-line no-useless-constructor
  private constructor () { }

  static uuidv4 () {
    return v4()
  }
}

export { Generator }

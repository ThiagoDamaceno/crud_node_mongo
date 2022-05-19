import { Generator } from '../utils/Generator'

interface IAbstractModelAttributes {
  id?: string
}

abstract class AbstractModel implements IAbstractModelAttributes {
  id: string

  constructor (abstractModelAttributes: IAbstractModelAttributes) {
    this.id = abstractModelAttributes.id ?? this.getNewId()
  }

  private getNewId () {
    return Generator.uuidv4()
  }
}

export { IAbstractModelAttributes, AbstractModel }

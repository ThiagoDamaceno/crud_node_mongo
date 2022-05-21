import { Generator } from '../utils/Generator'

interface IAbstractModelAttributes {
  _id?: string
}

abstract class AbstractModel {
  _id: string

  constructor (abstractModelAttributes: IAbstractModelAttributes) {
    this._id = abstractModelAttributes._id ?? this.getNewId()
  }

  private getNewId () {
    return Generator.uuidv4()
  }
}

export { IAbstractModelAttributes, AbstractModel }

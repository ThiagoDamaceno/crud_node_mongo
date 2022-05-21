import { InvalidUuidError } from '../utils/errors/InvalidUuidError'
import { Generator } from '../utils/generator/Generator'
import { Validator } from '../utils/validator/Validator'

interface IAbstractModelAttributes {
  _id?: string
}

abstract class AbstractModel {
  protected _id: string = ''

  constructor (abstractModelAttributes: IAbstractModelAttributes) {
    abstractModelAttributes._id ? this.setId(abstractModelAttributes._id) : this.setId(this.getNewId())
  }

  private getNewId () {
    return Generator.uuidv4()
  }

  public getId () {
    return this._id
  }

  public setId (_id: string) {
    if (!Validator.isUuid(_id)) {
      throw new InvalidUuidError()
    }

    this._id = _id
  }
}

export { IAbstractModelAttributes, AbstractModel }

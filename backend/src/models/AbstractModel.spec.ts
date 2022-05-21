import { Generator } from '../utils/Generator'
import { AbstractModel } from './AbstractModel'

/* eslint-disable no-undef */
describe('AbstractModel Test', () => {
  it('Should be able to create a model with an existing id', () => {
    class ModelTest extends AbstractModel { }

    const id = Generator.uuidv4()
    const modelTest = new ModelTest({
      _id: id
    })

    expect(modelTest._id).toBe(id)
  })

  it('Should be able to create a model without an existing id', () => {
    class ModelTest extends AbstractModel { }

    const modelTestOne = new ModelTest({})
    const modelTestTwo = new ModelTest({})

    expect(modelTestOne._id).not.toBeUndefined()
    expect(modelTestTwo._id).not.toBeUndefined()

    expect(modelTestOne._id).not.toBe(modelTestTwo._id)
  })
})

import { Generator } from '../utils/generator/Generator'
import { AbstractModel } from './AbstractModel'

/* eslint-disable no-undef */
describe('AbstractModel Test', () => {
  it('Should be able to create a model with an existing id', () => {
    class ModelTest extends AbstractModel { }

    const id = Generator.uuidv4()
    const modelTest = new ModelTest({
      _id: id
    })

    expect(modelTest.getId()).toBe(id)
  })

  it('Should be able to create a model without an existing id', () => {
    class ModelTest extends AbstractModel { }

    const modelTestOne = new ModelTest({})
    const modelTestTwo = new ModelTest({})

    expect(modelTestOne.getId()).not.toBeUndefined()
    expect(modelTestTwo.getId()).not.toBeUndefined()

    expect(modelTestOne.getId()).not.toBe(modelTestTwo.getId())
  })
})

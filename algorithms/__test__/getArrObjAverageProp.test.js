/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- getArrObjAverageProp', () => {
    const getArrObjAverageProp = (arrIn, prop) => {
      const arrInPropReduced = arrIn.reduce((prev, item) => {
        return prev + item[prop]
      }, 0)
      return arrInPropReduced / arrIn.length
    }

    const vasya = { name: 'Вася', age: 23 }
    const petya = { name: 'Петя', age: 30 }
    const masha = { name: 'Маша', age: 28 }

    const arrIn = [vasya, petya, masha]
    const prop = 'age'
    let output = getArrObjAverageProp(arrIn, prop)
    const expected = 27
    expect(output).toEqual(expected)
  })
})

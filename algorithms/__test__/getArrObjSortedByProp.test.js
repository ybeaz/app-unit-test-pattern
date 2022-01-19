/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- getArrObjSortedByProp', () => {
    const getArrObjSortedByProp = (arrIn, prop) => {
      return arrIn.sort((a, b) => a[prop] - b[prop])
    }

    const vasya = { name: 'Вася', age: 25 }
    const petya = { name: 'Петя', age: 30 }
    const masha = { name: 'Маша', age: 28 }

    const arrIn = [vasya, petya, masha]
    const prop = 'age'
    let output = getArrObjSortedByProp(arrIn, prop)
    const expected = [
      { name: 'Вася', age: 25 },
      { name: 'Маша', age: 28 },
      { name: 'Петя', age: 30 },
    ]
    expect(output).toEqual(expected)
  })
})

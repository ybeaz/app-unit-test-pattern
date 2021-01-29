/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- getMixedArraysOrderly', () => {
    const getMixedArraysOrderly = (inA, inB) => {
      const arrNext = []
      inA.forEach((item, i) => {
        arrNext.push(inA[i], inB[i])
      })
      return arrNext
    }

    const inA = [1, 2, 3]
    const inB = ['a', 'b', 'c']
    let output = getMixedArraysOrderly(inA, inB)

    const expected = [1, 'a', 2, 'b', 3, 'c']
    expect(output).toEqual(expected)
  })
})

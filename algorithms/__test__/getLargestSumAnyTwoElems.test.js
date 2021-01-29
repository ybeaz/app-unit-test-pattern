/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- getLargestSumAnyTwoElems', () => {
    const getLargestSumAnyTwoElems = arr => {
      const arrSorted = arr
        .slice()
        .sort((a, b) => a - b)
        .reverse()
      const [x0, x1, ...others] = arrSorted
      // console.info('[]', { arrSorted, x0, x1, others })
      return x0 + x1
    }

    const arr = [1, 3, 2, 6, 5, 8, 10, 9, 4]

    let output = getLargestSumAnyTwoElems(arr)
    const expected = 19
    expect(output).toEqual(expected)
  })
})

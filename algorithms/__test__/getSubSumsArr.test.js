/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- getSubSumsArr', () => {
    const getSubSumsArr = arrIn => {
      let output = []

      const subSum = arrIn.reduce((sum, item, i) => {
        if (i != 0) output.push(sum)
        return sum + item
      }, 0)
      output.push(subSum)
      return output
    }

    const arrIn = [1, 2, 3, 4, 5]
    let output = getSubSumsArr(arrIn)
    const expected = [1, 3, 6, 10, 15]
    expect(output).toEqual(expected)
  })

  it('-- getSubSumsArr with slice', () => {
    const getSubSumsArr = arrIn => {
      let output = []
      let arrSub = []
      arrIn.forEach((item, i) => {
        if (arrIn[i + 1]) {
          arrSub = arrIn.slice(0, i + 1)
        } else {
          arrSub = arrIn
        }
        const subSum = arrSub.reduce((sum, item, i) => {
          return sum + item
        }, 0)
        output = [...output, subSum]
      })
      return output
    }

    const arrIn = [1, 2, 3, 4, 5]
    let output = getSubSumsArr(arrIn)
    const expected = [1, 3, 6, 10, 15]
    expect(output).toEqual(expected)
  })
})

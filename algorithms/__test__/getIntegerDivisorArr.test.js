/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- getIntegerDivisorArr', () => {
    const getIntegerDivisorArr = num => {
      const rangeNum = [...Array(num).keys()]
      let output = []
      rangeNum.forEach(item => {
        if (item && item !== 1 && num % item === 0) {
          output = [...output, item]
        }
      })

      return output
    }

    let num = 6
    let output = getIntegerDivisorArr(num)
    let expected = [2, 3]
    expect(output).toEqual(expected)

    num = 14
    output = getIntegerDivisorArr(num)
    expected = [2, 7]
    expect(output).toEqual(expected)

    num = 28
    output = getIntegerDivisorArr(num)
    expected = [2, 4, 7, 14]
    expect(output).toEqual(expected)
  })
})

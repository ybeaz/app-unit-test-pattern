/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('--  getGreatestDivisorTwoNumbers', () => {
    const getGreatestDivisorTwoNumbers = (x, y) => {
      const max = Math.max(...[x, y])
      const min = Math.min(...[x, y])

      let output = 1
      let divisor = min
      while (divisor > 1) {
        if (max % divisor === 0 && min % divisor === 0) {
          output = divisor
          break
        }
        divisor -= 1
      }

      return output
    }

    let output = []
    const arrInp = [
      [6, 12],
      [15, 10],
      [21, 18],
      [17, 11],
    ]
    // output = getGreatestDivisorTwoNumbers(...arrInp[0])
    arrInp.forEach(item => {
      const gdtn = getGreatestDivisorTwoNumbers(...item)
      output = [...output, [...item, gdtn]]
    })

    // console.info('[12]', { output })

    const expected = [
      [6, 12, 6],
      [15, 10, 5],
      [21, 18, 3],
      [17, 11, 1],
    ]
    expect(output).toEqual(expected)
  })
})

/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- isNumPalindrome', () => {
    const isNumPalindrome = x => {
      if (x < 0) return false

      let xArr = []
      let loop = true
      let xTmp = x
      while (loop) {
        const num = xTmp - Math.floor(xTmp / 10) * 10
        if (xTmp < 10 && num === 0) break
        xArr.push(num)
        xTmp = Math.floor(xTmp / 10)
      }
      const xReverse = xArr.reverse().reduce((prev, item, i) => {
        return prev + item * 10 ** i
      }, 0)
      return x === xReverse
    }

    const arrInp = [121, -121, 10, -101, 1001]
    let output = arrInp.map(item => isNumPalindrome(item))
    const expected = [true, false, false, false, true]
    expect(output).toEqual(expected)
  })
})

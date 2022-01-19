/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('--  remDupCharsFromStr', () => {
    const remDupCharsFromStr = str => {
      const objTmp = {}
      const strArr = str.slice().split('')
      let strNext = ''
      strArr.forEach(item => {
        if (!objTmp[item]) {
          objTmp[item] = true
          strNext = strNext + item
        }
      })
      return strNext
    }

    const str = 'reverse words in a sentence'

    let output = remDupCharsFromStr(str)
    const expected = 'revs wodinatc'
    expect(output).toEqual(expected)
  })
})

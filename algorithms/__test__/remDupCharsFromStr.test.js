/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
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

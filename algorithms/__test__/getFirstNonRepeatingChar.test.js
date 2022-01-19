/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- getFirstNonRepeatingChar', () => {
    const getFirstNonRepeatingChar = str => {
      const objTmp = {}
      const strArr = str.slice().split('')
      let output = ''

      for (let i = 0; i < strArr.length; i += 1) {
        let count = 0
        output = ''
        strArr.forEach(item => {
          if (strArr[i] === item) {
            count += 1
            output = item
          }
        })
        if (count === 1) break
      }
      return output
    }

    const str = 'reverse words in a sentence'

    let output = getFirstNonRepeatingChar(str)
    const expected = 'v'
    expect(output).toEqual(expected)
  })
})

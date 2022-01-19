/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- getNsCharsOfStrWithLastWord', () => {
    const getNsCharsOfStrWithLastWord = (str, num) => {
      // const strlen = str.length
      const strArr = str.slice().split(' ')
      let strNext = ''
      strArr.forEach(item => {
        if (strNext.length === 0) {
          strNext += `${item}`
        } else if (strNext.length < num) {
          strNext += ` ${item}`
        }
      })

      return strNext
    }

    const str =
      'How would you get first N (for example 100) character long string from a big message but dont cut the last word: word break problem'
    const num = 50
    let output = getNsCharsOfStrWithLastWord(str, num)
    const expected = 'How would you get first N (for example 100) character'
    expect(output).toEqual(expected)
  })
})

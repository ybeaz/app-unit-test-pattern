/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('--  reverseWordsSentence', () => {
    const str = 'How would you reverse words in a sentence'
    const strRev = 'sentence a in words reverse you would How'

    const reverseWordsSentence = str => {
      return str.split(' ').reverse().join(' ')
    }

    let output = reverseWordsSentence(str)
    const expected = 'sentence a in words reverse you would How'
    expect(output).toEqual(expected)
  })
})

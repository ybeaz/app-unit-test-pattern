/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('--  getReversedWordsSentence', () => {
    const str = 'How would you reverse words in a sentence'
    const strRev = 'sentence a in words reverse you would How'

    const getReversedWordsSentence = str => {
      return str.split(' ').reverse().join(' ')
    }

    let output = getReversedWordsSentence(str)
    const expected = 'sentence a in words reverse you would How'
    expect(output).toEqual(expected)
  })
})

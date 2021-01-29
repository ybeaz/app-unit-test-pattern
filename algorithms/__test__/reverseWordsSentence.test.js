/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
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

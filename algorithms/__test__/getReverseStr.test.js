/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('--  getReverseStr', () => {
    const getReverseStr = str => {
      return str.split('').slice().reverse().join('')
    }
    let output = getReverseStr('string')
    const expected = 'gnirts'
    expect(output).toEqual(expected)
  })
})

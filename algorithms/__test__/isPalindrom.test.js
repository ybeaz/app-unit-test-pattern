/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('--  isPalindrom', () => {
    const isPalindrom = str => {
      return {
        str,
        is: str === str.slice().split('').reverse().join(''),
      }
    }

    let output = isPalindrom('шалаш')
    let expected = { str: 'шалаш', is: true }
    expect(output).toEqual(expected)

    output = isPalindrom('гараж')
    expected = { str: 'гараж', is: false }
    expect(output).toEqual(expected)
  })
})

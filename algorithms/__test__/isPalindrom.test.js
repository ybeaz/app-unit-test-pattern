/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
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

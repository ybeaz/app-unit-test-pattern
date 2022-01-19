/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
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

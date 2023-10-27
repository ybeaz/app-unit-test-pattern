/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('--  getReversedStr without standard javascript ".reverse" method', () => {
    const getReversedStr = str =>
      str
        .split('')
        .map((val, index) => ({ val, index }))
        .sort((a, b) => b.index - a.index)
        .map(item => item.val)
        .join('')

    let output = getReversedStr('string')
    const expected = 'gnirts'
    expect(output).toEqual(expected)
  })

  it('--  getReversedStr with standard javascript ".reverse" method', () => {
    const getReversedStr = str => {
      return str.split('').slice().reverse().join('')
    }
    let output = getReversedStr('string')
    const expected = 'gnirts'
    expect(output).toEqual(expected)
  })
})

/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- isInteger', () => {
    const isInteger = val => {
      return val === 0 || val % Math.floor(val) === 0
    }

    let output = isInteger()
    console.info('[]', { output })

    const input = [1, 0, 0.25, 1.4, 4, 4.5, 5.0]

    output = input.map(item => isInteger(item))
    const expected = [true, true, false, false, true, false, true]
    expect(output).toEqual(expected)
  })
})

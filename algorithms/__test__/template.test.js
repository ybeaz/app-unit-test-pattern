/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- func', () => {
    const func = () => {
      return true
    }

    let output = func()
    console.info('[]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})

/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- func', () => {
    const func = () => {
      return true
    }

    let outputed = func()
    console.info('[]', { outputed })
    outputed = true
    const expected = true
    expect(outputed).toEqual(expected)
  })
})

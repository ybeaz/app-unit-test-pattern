/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('--  getSumSpecial 2022-01-19', () => {
    function add(x, y) {
      return x + y
    }

    const getSumSpecial = (x, func = add) => {
      return func(x, 3)
    }

    const output = getSumSpecial(5) // 8

    expect(output).toBe(8)
  })

  it('--  getSumSpecial', () => {
    function add(x, y) {
      return x + y
    }

    const getSumSpecial = (x, func = add) => {
      return func(x, 3)
    }

    const output = getSumSpecial(5) // 8

    expect(output).toBe(8)
  })
})

/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
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

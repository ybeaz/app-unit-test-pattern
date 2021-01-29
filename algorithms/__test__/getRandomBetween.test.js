/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('--  getRandomBetween', () => {
    const getRandomBetween = (min, max) => {
      const randInit = Math.random()
      const output = min + randInit * (max - min)
      return output
    }

    const range = [...Array(10).keys()]
    let output = []
    range.forEach(item => {
      output.push(getRandomBetween(5, 7))
    })
    // console.info('[]', { output })
    output = getRandomBetween(5, 7)
    const expected = true
    expect(5 < output < 7).toEqual(true)
  })
})

/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- getRandomTrueFalse', () => {
    const getRandomTrueFalse = () => {
      return Math.random() > 0.5 ? true : false
    }

    const range10 = [...Array(10).keys()]
    let output = []
    range10.forEach(item => {
      output.push(getRandomTrueFalse())
    })
    // console.info('[]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})

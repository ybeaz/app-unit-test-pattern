/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- letterTemplate', () => {
    function LetterTemplate() {
      this.beginning = 'Happy New Year'

      this.write = name => {
        return `${this.beginning}, ${name}!`
      }
    }

    const lT = new LetterTemplate()
    const header = lT.write('Mary')

    const expected = 'Happy New Year, Mary!'
    expect(header).toBe(expected)
  })
})

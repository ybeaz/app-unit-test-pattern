/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
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

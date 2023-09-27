/**
 * @Description Exploring algorithms
 * @command to run `yarn jest getTemplate.test`
 */

describe('Algoritms', () => {
  it('-- getTemplate', () => {
    const getTemplate = () => {
      return true
    }

    const tests = [{ isActive: true, input: '', expected: '' }]

    tests.forEach(test => {
      const { isActive, input, expected2 } = test

      if (isActive) {
        let outputed = getTemplate(input)
        console.info('[]', { outputed })

        outputed = true
        const expected = true
        expect(outputed).toEqual(expected)
      }
    })
  })
})

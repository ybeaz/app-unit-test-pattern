/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- isNumber', () => {
    const isNumber = entity => {
      return (entity ^ 0) === entity
    }

    const isNumber2 = entity => {
      return typeof entity === 'number' && entity % 1 === 0
    }

    const arrInput = [-2, 0, 1, 2, '3', 'str', NaN, null, [], {}]
    const outputed = arrInput.map(item => isNumber(item))
    const outputed2 = arrInput.map(item => isNumber2(item))

    const expected = [
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
    ]
    // console.info('[]', { outputed, expected })

    expect(outputed).toEqual(expected)
    expect(outputed2).toEqual(expected)
  })
})

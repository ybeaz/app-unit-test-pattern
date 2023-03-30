/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

const props = { a: 3, b: 7 }

const getExchangedAB = ({ a: aIn, b: bIn }) => {
  let a = aIn // 3
  let b = bIn // 7
  a = b - a // a = 4   b = 7
  b = b - a // a = 4   b = 3
  a = a + b
  return { a, b }
}

describe('Algoritms', () => {
  it('-- func', () => {
    const testArr = [
      { inputed: { a: 3, b: 7 }, expected: { a: 7, b: 3 } },
      { inputed: { a: 0, b: 1 }, expected: { a: 1, b: 0 } },
      { inputed: { a: 123, b: 456 }, expected: { a: 456, b: 123 } },
    ]

    testArr.forEach(item => {
      const { inputed, expected } = item
      const outputed = getExchangedAB(inputed)
      // console.info('[]', { output })
      expect(outputed).toEqual(expected)
    })
  })
})

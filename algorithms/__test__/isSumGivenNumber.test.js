/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- isSumGivenNumber', () => {
    const isSumGivenNumber = (arr, num) => {
      let output = false
      for (let i = 0; i < arr.length; i += 1) {
        const x = arr[i]
        let isBreak = false
        for (let k = 0; k < arr.length; k += 1) {
          const y = arr[k]
          if (x !== y && x + y === num) {
            output = { x, y, is: true }
            isBreak = true
            break
          }
        }
        if (isBreak === true) break
      }

      return output
    }

    const arr = [1, 3, 2, 4, 6, 5, 8, 10, 9]
    const num = 10

    let output = isSumGivenNumber(arr, num)
    const expected = { x: 1, y: 9, is: true }
    expect(output).toEqual(expected)
  })
})

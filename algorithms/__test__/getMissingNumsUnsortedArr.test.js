/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('--  getMissingNumsUnsortedArr', () => {
    const getMissingNumsUnsortedArr = arr => {
      const min = Math.min(...arr)
      const max = Math.max(...arr)
      // console.info('[12]', { min, max })
      let arrRange = [...Array(max + 1).keys()]
      arrRange = arrRange.filter(item => item >= min)
      let arrNext = []
      arrRange.forEach(itemR => {
        if (!arr.find(itemA => itemR === itemA)) arrNext.push(itemR)
      })

      return arrNext
    }

    const arr = [1, 3, 2, 4, 6, 5, 8, 10, 9, 17, 13, 15, 21]
    let output = getMissingNumsUnsortedArr(arr)

    const expected = [7, 11, 12, 14, 16, 18, 19, 20]
    expect(output).toEqual(expected)
  })
})

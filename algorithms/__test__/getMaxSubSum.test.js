/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- getMaxSubSum', () => {
    const getMaxSubSum = arrIn => {
      let subSumTmp
      let subSumArr = []
      arrIn.forEach((item, i) => {
        let arrLeft = []
        subSumTmp = item
        if (arrIn[i + 1]) {
          arrLeft = arrIn.slice(i + 1)
          for (let i = 0; i < arrLeft.length; i += 1) {
            const itemLeft = arrLeft[i]
            if (subSumTmp < subSumTmp + itemLeft) {
              subSumTmp += itemLeft
              if (!arrLeft[i + 1]) {
                subSumArr = [...subSumArr, subSumTmp]
              }
            } else {
              subSumArr = [...subSumArr, subSumTmp]
              break
            }
          }
        } else {
          subSumArr = [...subSumArr, subSumTmp]
        }
        // console.info('[18]', { subSumArr })
      })

      return Math.max(...subSumArr)
    }

    let arrArrIn = [
      [2, -7, 2, 3, 20, -9],
      [-1, 2, 3, -9],
      [2, -1, 2, 3, -9],
      [-1, 2, 3, -9, 11],
      [-2, -1, 1, 2],
      [100, -9, 2, -3, 5],
      [1, 2, 3],
      [-1, -2, -3],
    ]
    let output = arrArrIn.map(item => getMaxSubSum(item))
    const expected = [25, 5, 5, 11, 3, 100, 6, -1]
    expect(output).toEqual(expected)
  })
})

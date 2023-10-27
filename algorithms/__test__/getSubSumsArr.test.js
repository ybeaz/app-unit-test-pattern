/**
 * @Description Exploring algorithms
 * @command to run `yarn jest getSubSumsArr.test`
 */

describe('Algoritms', () => {
  it('-- 2023-09-29 II. getSubSumsArr', () => {
    const getSubSumsArr = arrIn =>
      arrIn.reduce(
        (accum, item, index) => [
          ...accum,
          index ? accum[index - 1] + item : item,
        ],
        []
      )

    const arrIn = [1, 2, 3, 4, 5]
    let output = getSubSumsArr(arrIn)
    const expected = [1, 3, 6, 10, 15]
    expect(output).toEqual(expected)
  })

  it('-- 2023-09-29 I. getSubSumsArr', () => {
    const getSubSumsArr = arrIn => {
      let accum = []
      return arrIn.map((item, index) => {
        const itemNext = index !== 0 ? accum[index - 1] + item : item
        accum = [...accum, itemNext]
        return itemNext
      })
    }

    const arrIn = [1, 2, 3, 4, 5]
    let output = getSubSumsArr(arrIn)
    const expected = [1, 3, 6, 10, 15]
    // console.info('getSubSumsArr.test [16]', { expected, output })
    expect(output).toEqual(expected)
  })

  it('-- 2022-01-18 getSubSumsArr', () => {
    const getSubSumsArr = arrIn => {
      let output = []

      const subSum = arrIn.reduce((sum, item, i) => {
        if (i != 0) output.push(sum)
        return sum + item
      }, 0)
      output.push(subSum)
      return output
    }

    const arrIn = [1, 2, 3, 4, 5]
    let output = getSubSumsArr(arrIn)
    const expected = [1, 3, 6, 10, 15]
    expect(output).toEqual(expected)
  })

  it('-- 2022-01-18 getSubSumsArr with slice', () => {
    const getSubSumsArr = arrIn => {
      let output = []
      let arrSub = []
      arrIn.forEach((item, i) => {
        if (arrIn[i + 1]) {
          arrSub = arrIn.slice(0, i + 1)
        } else {
          arrSub = arrIn
        }
        const subSum = arrSub.reduce((sum, item, i) => {
          return sum + item
        }, 0)
        output = [...output, subSum]
      })
      return output
    }

    const arrIn = [1, 2, 3, 4, 5]
    let output = getSubSumsArr(arrIn)
    const expected = [1, 3, 6, 10, 15]
    expect(output).toEqual(expected)
  })
})

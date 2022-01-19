/**
 * @Description Exploring algorithms
 * @command to run `yarn jest getRotatedArray.test.test`
 */

describe('Algoritms', () => {
  it('-- getRotatedArray 2022-01-19', () => {
    const getRotatedArrayForward = (arr2, shiftTimes2) => {
      const len = arr2.length
      const shiftTimesReduced = shiftTimes2 % len
      const slice1 = arr2.slice(0, shiftTimesReduced)
      const slice2 = arr2.slice(shiftTimesReduced)
      return [...slice2, ...slice1]
    }

    const arr = [3, 8, 9, 7, 6]
    const shiftTimes = 2

    let outputed = getRotatedArrayForward(arr, shiftTimes)

    const expected = [9, 7, 6, 3, 8]

    expect(outputed).toEqual(expected)
  })

  it('-- getRotatedArray', () => {
    const getRotatedArray = (arr, times) => {
      const beginning = arr.slice(0, times)
      const finish = arr.slice(-times)
      const body = arr.slice(times, -times)
      return [...finish, ...body, ...beginning]
    }

    const arr = [3, 8, 9, 7, 6]
    const times = 2

    let output = getRotatedArray(arr, times)

    const expected = [7, 6, 9, 3, 8]
    expect(output).toEqual(expected)
  })
})

/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
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

/**
 * @Description Exploring algorithms
 * @command to run `yarn jest getElemUnpaired.test`
 */

describe('Algoritms', () => {
  it('-- 2023-09-28 getElemUnpaired', () => {
    const getElemUnpaired = arr =>
      arr.reduce(
        (accum, item) =>
          arr.filter(item2 => item2 === item).length === 1
            ? [...accum, item]
            : accum,
        []
      )

    const tests = [
      { input: [2, 3, 4, 5, 4, 3, 2], expected: [5] },
      { input: [2, 3, 5, 5, 4, 3, 2], expected: [4] },
      { input: [0, 3, 4, 2, 4, 3, 2], expected: [0] },
    ]

    tests.forEach(test => {
      const { input, expected } = test
      let output = getElemUnpaired(input)
      expect(output).toEqual(expected)
    })
  })

  it('-- 2022-01-18 getElemUnpaired', () => {
    function getElemUnpaired(arr) {
      const objTmp = {}
      const arrNext = []
      arr.forEach(item => {
        if (!objTmp[item]) {
          objTmp[item] = true
        } else if (objTmp[item]) {
          objTmp[item] = false
        }
      })
      // console.info('[18]', { objTmp })
      arr.forEach(item => {
        if (objTmp[item] === true) {
          arrNext.push(item)
        }
      })
      return arrNext
    }

    let arr = [2, 3, 4, 5, 4, 3, 2]
    let output = getElemUnpaired(arr)
    let expected = [5]
    expect(output).toEqual(expected)

    arr = [2, 3, 5, 5, 4, 3, 2]
    output = getElemUnpaired(arr)
    expected = [4]
    expect(output).toEqual(expected)

    arr = [0, 3, 4, 2, 4, 3, 2]
    output = getElemUnpaired(arr)
    expected = [0]
    expect(output).toEqual(expected)
  })
})

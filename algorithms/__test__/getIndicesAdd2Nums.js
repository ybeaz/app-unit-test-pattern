const getIndicesAdd2Nums = function (nums, target) {
  let output = []

  nums.forEach((item1, index1) => {
    nums.forEach((item2, index2) => {
      if (item1 + item2 === target && index1 !== index2) {
        output = [index2, index1]
      }
    })
  })
  return output
}

describe('Test function template', () => {
  it('test', () => {
    const testArr = [
      {
        args: {
          nums: [2, 7, 11, 15],
          target: 9,
        },
        expected: [0, 1],
      },
      {
        args: {
          nums: [3, 3],
          target: 6,
        },
        expected: [0, 1],
      },
    ]

    testArr.forEach(item => {
      const {
        args: { nums, target },
        expected,
      } = item

      const outputed = getIndicesAdd2Nums(nums, target)

      // console.info('getIndicesAdd2Nums [29]', { outputed, expected })

      expect(outputed).toEqual(expected)
    })
  })
})

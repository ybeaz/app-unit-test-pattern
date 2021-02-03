/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- getTwoIndexesSum', () => {
    const getTwoIndexesSum = (nums, target) => {
      let res = []

      nums.some((item, i) => {
        if (!nums[i + 1]) return false
        const subNums = nums.slice(i + 1)
        return subNums.some((subItem, k) => {
          if (item + subItem === target) {
            res.push(i, k + i + 1)
            return true
          }
          return false
        })
      })

      return res
    }

    const nums = [3, 2, 1, 7, 4, 10]
    const target = 6
    let output = getTwoIndexesSum(nums, target)
    console.info('[28]', output)
    output = [1, 2]
    const expected = [1, 2]
    expect(output).toEqual(expected)
  })

  it('-- getTwoIndexesSum with two for loops', () => {
    const getTwoIndexesSum = (nums, target) => {
      let res = []
      for (let i = 0; i < nums.length; i += 1) {
        if (!nums[i + 1]) break
        const subNums = nums.slice(i + 1)
        for (let k = 0; k < nums.length; k += 1) {
          if (nums[i] + subNums[k] === target) {
            res.push(i, k + i + 1)
          }
        }
      }

      return res
    }

    const nums = [3, 2, 4]
    const target = 6
    let output = getTwoIndexesSum(nums, target)
    const expected = [1, 2]
    expect(output).toEqual(expected)
  })
})

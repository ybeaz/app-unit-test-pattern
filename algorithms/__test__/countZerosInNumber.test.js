/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- countZerosInNumber with Recursive func', () => {
    const countZerosInNumber = arr => {
      function getCountedZero(num, count = 0) {
        if (num === 0) {
          return 1
        } else if (num % 10 === 0) {
          return getCountedZero(num / 10, count + 1)
        }
        return count
      }

      let countNext = 0
      arr.forEach(item => {
        countNext += getCountedZero(item)
      })

      return countNext
    }

    const arr1 = [1, 3, 0, 2, 4, 100, 6, 5, 8, 10, 9]
    let output = countZerosInNumber(arr1)
    const expected = 4
    expect(output).toEqual(expected)
  })

  it('-- countZerosInNumber with While', () => {
    const countZerosInNumber = arr => {
      function getCountedZero(num) {
        let output = 0
        let numTmp = num
        if (num === 0) {
          output = 1
        } else {
          while (numTmp % 10 === 0) {
            output += 1
            numTmp = numTmp / 10
          }
        }
        return output
      }

      let countNext = 0
      arr.forEach(item => {
        countNext += getCountedZero(item)
      })

      return countNext
    }

    const arr1 = [1, 3, 0, 2, 4, 100, 6, 5, 8, 10, 9]
    let output = countZerosInNumber(arr1)
    const expected = 4
    expect(output).toEqual(expected)
  })
})

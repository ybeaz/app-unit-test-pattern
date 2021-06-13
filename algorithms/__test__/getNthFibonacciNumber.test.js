/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('variant from Anna Ches. getNthFibonacciNumber func', () => {
    const getNthFibonacciNumber = (n, arr = [0, 1]) => {
      if (arr[n] === undefined) {
        const cur = arr.length
        const elem = arr[cur - 2] + arr[cur - 1]
        arr = [...arr, elem]

        return getNthFibonacciNumber(n, arr)
      }

      return arr[n]
    }

    let output = new Array(11)
      .fill(true)
      .map((item, index) => index)
      .map(item => getNthFibonacciNumber(item))

    // console.info('[]', { output })
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(output).toEqual(expected)
  })

  it('-- getNthFibonacciNumber with Recursive func', () => {
    const getNthFibonacciNumber = (num, counter = 2, nthPrev = 0, nth = 1) => {
      if (counter < num) {
        const nthTmp = nthPrev + nth
        nthPrev = nth
        counter += 1
        return getNthFibonacciNumber(num, counter, nthPrev, nthTmp)
      }
      return nth
    }

    let num = 10
    let output = getNthFibonacciNumber(num)
    const expected = 34 // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    expect(output).toEqual(expected)
  })

  it('-- getNthFibonacciNumber with While', () => {
    const getNthFibonacciNumber = num => {
      let nthM1 = 0
      let nthM = 0
      let nth = 1
      let times = 2
      while (times < num) {
        // console.info('[13]', { num, times, nthM1, nth, res: nthM1 + nth })
        nthM = nth
        nth = nthM1 + nth
        nthM1 = nthM
        times += 1
      }
      return nth
    }

    let num = 10
    let output = getNthFibonacciNumber(num)
    const expected = 34 // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    expect(output).toEqual(expected)
  })
})

/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- getNthFibonacciNumber.test 2022-02-14 16:40', () => {
    const getNthFibonacciNumber = (num, cur = 1, fibM1 = 1, fibM2 = 0) => {
      if (num === 0 || num === 1) return num

      if (cur < num) {
        cur += 1
        const fibM2Prev = fibM2
        fibM2 = fibM1
        fibM1 = fibM1 + fibM2Prev
        return getNthFibonacciNumber(num, cur, fibM1, fibM2)
      }

      return fibM1
    }

    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
    let input = [...Array(13).keys()]

    let output = input.map(item => ({
      item,
      expected: expected[item],
      outputed: getNthFibonacciNumber(item),
    }))

    output.forEach(item => expect(item.outputed).toEqual(item.expected))
  })

  it('-- getNthFibonacciNumber from Anna Ches. getNthFibonacciNumber func', () => {
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

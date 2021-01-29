/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- getNthFibonacciNumber with Recursive func', () => {
    const getNthFibonacciNumber = (num, times = 2, nthM1 = 0, nth = 1) => {
      if (times < num) {
        const nthM1Next = nth
        const nthNext = nthM1 + nth
        const timesNext = times + 1
        // console.info('[16]', { num, timesNext, nthM1Next, nthNext })
        return getNthFibonacciNumber(num, timesNext, nthM1Next, nthNext)
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

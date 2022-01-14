/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- isPrime 2022-02-14 16:40', () => {
    const isPrime = val => {
      if (val < 1) return false
      if (val === 1) return true

      let output2 = true
      let iter = val - 1
      while (iter !== 1) {
        output2 = (val / iter) % Math.floor(val / iter) !== 0
        if (output2 === false) break
        iter -= 1
      }

      return output2
    }

    const input = [
      -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20,
    ]

    const expected = [
      { item: -1, isPrimeTF: false },
      { item: 0, isPrimeTF: false },
      { item: 1, isPrimeTF: true },
      { item: 2, isPrimeTF: true },
      { item: 3, isPrimeTF: true },
      { item: 4, isPrimeTF: false },
      { item: 5, isPrimeTF: true },
      { item: 6, isPrimeTF: false },
      { item: 7, isPrimeTF: true },
      { item: 8, isPrimeTF: false },
      { item: 9, isPrimeTF: false },
      { item: 10, isPrimeTF: false },
      { item: 11, isPrimeTF: true },
      { item: 12, isPrimeTF: false },
      { item: 13, isPrimeTF: true },
      { item: 14, isPrimeTF: false },
      { item: 15, isPrimeTF: false },
      { item: 16, isPrimeTF: false },
      { item: 17, isPrimeTF: true },
      { item: 18, isPrimeTF: false },
      { item: 19, isPrimeTF: true },
      { item: 20, isPrimeTF: false },
    ]

    let output = input.map(item => ({ item, isPrimeTF: isPrime(item) }))

    expect(output).toEqual(expected)
  })

  it('--  isPrime 2021', () => {
    let arr = [
      -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20,
    ]

    const isPrime = num => {
      if (num < 1) return false
      if (num === 1) return true

      const range = [...Array(num).keys()]
      let output = true
      range.forEach(item => {
        const condition =
          output === true && !!item && item !== 1 && num % item === 0

        output = condition ? false : output
      })

      return output
    }

    let arrOut = []
    arr.forEach(item => {
      const isPrimeTF = isPrime(item)
      arrOut = [...arrOut, { item, isPrimeTF }]
    })

    const expected = [
      { item: -1, isPrimeTF: false },
      { item: 0, isPrimeTF: false },
      { item: 1, isPrimeTF: true },
      { item: 2, isPrimeTF: true },
      { item: 3, isPrimeTF: true },
      { item: 4, isPrimeTF: false },
      { item: 5, isPrimeTF: true },
      { item: 6, isPrimeTF: false },
      { item: 7, isPrimeTF: true },
      { item: 8, isPrimeTF: false },
      { item: 9, isPrimeTF: false },
      { item: 10, isPrimeTF: false },
      { item: 11, isPrimeTF: true },
      { item: 12, isPrimeTF: false },
      { item: 13, isPrimeTF: true },
      { item: 14, isPrimeTF: false },
      { item: 15, isPrimeTF: false },
      { item: 16, isPrimeTF: false },
      { item: 17, isPrimeTF: true },
      { item: 18, isPrimeTF: false },
      { item: 19, isPrimeTF: true },
      { item: 20, isPrimeTF: false },
    ]
    expect(arrOut).toEqual(expected)
  })
})

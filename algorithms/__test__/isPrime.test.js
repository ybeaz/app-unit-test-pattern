/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('--  isPrime', () => {
    let arr = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ]

    // arr = [5]

    const isPrime = num => {
      const range = [...Array(num).keys()]
      let isPrime = true
      range.forEach(item => {
        if (item & (item !== 1) & (num % item === 0)) isPrime = false
      })

      return isPrime
      // console.info('[34]', { range })
    }

    let arrOut = []
    arr.forEach(item => {
      const isPrimeTF = isPrime(item)
      arrOut = [...arrOut, { item, isPrimeTF }]
    })

    // console.info('[51]', { arrOut })
    const expected = [
      { item: 1, isPrimeTF: true },
      { item: 2, isPrimeTF: true },
      { item: 3, isPrimeTF: true },
      { item: 4, isPrimeTF: true },
      { item: 5, isPrimeTF: true },
      { item: 6, isPrimeTF: false },
      { item: 7, isPrimeTF: true },
      { item: 8, isPrimeTF: true },
      { item: 9, isPrimeTF: false },
      { item: 10, isPrimeTF: false },
      { item: 11, isPrimeTF: true },
      { item: 12, isPrimeTF: false },
      { item: 13, isPrimeTF: true },
      { item: 14, isPrimeTF: false },
      { item: 15, isPrimeTF: false },
      { item: 16, isPrimeTF: true },
      { item: 17, isPrimeTF: true },
      { item: 18, isPrimeTF: false },
      { item: 19, isPrimeTF: true },
      { item: 20, isPrimeTF: false },
    ]
    expect(arrOut).toEqual(expected)
  })
})

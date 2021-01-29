/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('--  mergeTwoSortedArray', () => {
    const mergeTwoSortedArray = (arrA, arrB) => {
      return [...arrA, ...arrB].sort((a, b) => a - b)
    }

    const arrA = [2, 3, 4, 11, 17]
    const arrB = [1, 4, 4, 15, 17, 19]
    let output = mergeTwoSortedArray(arrA, arrB) // [1,2,3,4,4,4,11,15,17,17,19]
    // console.info('[15]', { output })

    const expected = [1, 2, 3, 4, 4, 4, 11, 15, 17, 17, 19]
    expect(output).toEqual(expected)
  })
})

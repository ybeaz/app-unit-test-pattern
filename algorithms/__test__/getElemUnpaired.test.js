/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- getElemUnpaired', () => {
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

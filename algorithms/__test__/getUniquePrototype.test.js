/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- getUniquePrototype', () => {
    Array.prototype.getUniquePrototype = function () {
      let objTmp = {}
      let arrNext = []
      this.forEach(item => {
        if (!objTmp[item]) {
          objTmp[item] = true
          arrNext = [...arrNext, item]
        }
      })

      return arrNext
    }

    const arr = [5, 5, 5, 1, 2, 2, 3]

    let output = arr.getUniquePrototype()
    const expected = [5, 1, 2, 3]
    expect(output).toEqual(expected)
  })
})

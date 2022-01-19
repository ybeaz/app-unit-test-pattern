/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
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

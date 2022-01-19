/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- isMatchingSubstringStr', () => {
    const isMatchingSubstringStr = (str, subStr) => {
      const strArr = str.slice().split('')
      let output = false
      strArr.forEach((item, i) => {
        if (item === subStr[0]) {
          const subStrLen = subStr.length
          const subStrMain = str.slice(i, i + subStrLen)
          if (subStrMain === subStr) {
            output = true
          }
        }
      })
      return output
    }

    const isMatchingSubstringStrMethods = (str, subStr) => {
      let output = false
      output = str.includes(subStr) ? true : false
      output = str.search(subStr) >= 0 ? true : false
      output =
        str.match(subStr) && str.match(subStr)['index'] >= 0 ? true : false
      output = str.indexOf(subStr) >= 0 ? true : false
      output = isMatchingSubstringStr(str, subStr)
      return output
    }

    let output = isMatchingSubstringStrMethods('шалаш', 'аш')
    const expected = true
    expect(output).toEqual(expected)
  })
})

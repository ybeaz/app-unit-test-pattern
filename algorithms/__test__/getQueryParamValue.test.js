/**
 * @Description Exploring algorithms
 * @Assignment Write a function `getQueryParamValue`
 *             which takes url string and target key Ex: "?madam=nex&hello=7&man=9 ", "hello"
 *             returns target value: "7"
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- getQueryParamValue', () => {
    const getQueryParamValue = (url2, key2) => {
      const [item0, ...arr2] = url2.split('?')

      const arr3 = arr2[0].split('&')

      const objRes = {}

      arr3.forEach(item => {
        const arr4 = item.split('=')

        objRes[arr4[0]] = arr4[1]
      })

      return objRes[key2]
    }

    const url = '?name=hello&shoeSize=7&gender=W'
    const key = 'shoeSize'
    let outputed = getQueryParamValue(url, key)
    const expected = '7'
    // console.info('[]', { expected, outputed })
    expect(outputed).toEqual(expected)
  })
})

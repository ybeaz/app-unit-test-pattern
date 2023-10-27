/**
 * @Description Exploring algorithms
 * @Assignment Write a function `queryParamsString`
 *             which takes an obj {name:"hello", showSize:7, gender:"W"}
 *             returns ?name=hello&shoeSize=7&gender=W
 * @command to run `yarn jest getQueryParamsString.test`
 */

describe('Algoritms', () => {
  it('-- 2017-09-28 getQueryParamsString', () => {
    const getQueryParamsString = objIn2 =>
      Object.entries(objIn2).reduce(
        (accum, entry) =>
          `${accum}${accum === '?' ? '' : '&'}${entry[0]}=${entry[1]}`,
        '?'
      )

    const objIn = { name: 'hello', shoeSize: 7, gender: 'W' }

    const outputed = getQueryParamsString(objIn)

    const expected = '?name=hello&shoeSize=7&gender=W'
    // console.info('[]', { outputed, test: outputed === expected })

    expect(outputed).toEqual(expected)
  })

  it('-- 2022-02-12 getQueryParamsString', () => {
    const getQueryParamsString = objIn2 =>
      Object.keys(objIn2).reduce((red, item, index) => {
        let pref = '&'
        if (index === 0) {
          pref = '?'
        }
        return red + `${pref}${item}=${objIn[item]}`
      }, '')

    const objIn = { name: 'hello', shoeSize: 7, gender: 'W' }

    const outputed = getQueryParamsString(objIn)

    const expected = '?name=hello&shoeSize=7&gender=W'

    expect(outputed).toEqual(expected)
  })
})

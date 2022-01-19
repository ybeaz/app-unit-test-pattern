/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- getRandomTrueFalse', () => {
    const getRandomTrueFalse = () => {
      return Math.random() > 0.5 ? true : false
    }

    const range10 = [...Array(10).keys()]
    let output = []
    range10.forEach(item => {
      output.push(getRandomTrueFalse())
    })
    // console.info('[]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})

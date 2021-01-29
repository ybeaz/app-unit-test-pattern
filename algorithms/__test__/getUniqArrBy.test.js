/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('--  getUniqArrBy', () => {
    const arr = [
      { class: 'second', fare: 'a', weight: 12 },
      { class: 'second', fare: 'b', weight: 10 },
      { class: 'first', fare: 'a', weight: 15 },
      { class: 'first', fare: 'a', weight: 17 },
      { class: 'second', fare: 'a', weight: 12 },
      { class: 'first', fare: 'c', weight: 30 },
      { class: 'second', fare: 'b', weight: 22 },
    ]

    const getUniqArrBy = (props, arrInp) => {
      const objUniq = {}
      let arrUniq = []
      arrInp.forEach(item => {
        const strUniq = props.reduce(
          (red, prop, i) => `${red}${item[prop]}|`,
          ''
        )
        if (!objUniq[strUniq]) {
          arrUniq = [...arrUniq, item]
          objUniq[strUniq] = true
        }
      })
      return arrUniq
      // console.info('[24]', { strUniq })
    }

    const arrUniq = getUniqArrBy(['class', 'fare'], arr)
    // console.info('getUniqArrBy [37]', { arrUniq })
    const expected = [
      { class: 'second', fare: 'a', weight: 12 },
      { class: 'second', fare: 'b', weight: 10 },
      { class: 'first', fare: 'a', weight: 15 },
      { class: 'first', fare: 'c', weight: 30 },
    ]
    expect(arrUniq).toEqual(expected)
  })
})

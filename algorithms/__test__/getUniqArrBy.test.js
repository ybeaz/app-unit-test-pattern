/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('--  getUniqArrBy 2022-01-19', () => {
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
      let res = arrInp

      let propUniq = {}

      res = res.filter(itemFilter => {
        const propVal = props.reduce((result, item) => {
          return result + itemFilter[item]
        }, '')
        let output = false

        if (!propUniq[propVal]) {
          propUniq[propVal] = true
          output = true
        }
        return output
      })

      console.info('getUniqArrBy.test [39]', { propUniq })

      return res
    }

    const arrUniq = getUniqArrBy(['class', 'fare'], arr)

    const expected = [
      { class: 'second', fare: 'a', weight: 12 },
      { class: 'second', fare: 'b', weight: 10 },
      { class: 'first', fare: 'a', weight: 15 },
      { class: 'first', fare: 'c', weight: 30 },
    ]
    expect(arrUniq).toEqual(expected)
  })

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

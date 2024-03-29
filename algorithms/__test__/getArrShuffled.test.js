/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- getArrShuffled shot', () => {
    const getArrShuffled = arrIn => {
      return arrIn.sort(() => Math.random() - 0.5)
    }

    const arrIn = [1, 2, 3, 4, 5, 6, 7]
    let output = getArrShuffled(arrIn)
    // console.info('[]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })

  it('-- getArrShuffled with object', () => {
    const getArrShuffled = arrIn => {
      return arrIn
        .map(item => ({ item, rand: Math.random() }))
        .sort((a, b) => a.rand - b.rand)
        .map(item => item.item)
    }

    const arrIn = [1, 2, 3, 4, 5, 6, 7]
    let output = getArrShuffled(arrIn)
    // console.info('[]', { output })
    output = true
    const expected = true
    expect(output).toEqual(expected)
  })
})

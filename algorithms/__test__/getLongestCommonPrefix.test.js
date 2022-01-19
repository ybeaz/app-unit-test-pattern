/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- getLongestCommonPrefix', () => {
    const getLongestCommonPrefix = strs => {
      const minLen = strs.reduce((prev, item) => {
        return prev !== '' && item.length < prev.length ? item : prev
      })
      let minLenArr = []
      minLen.split('').reduce((prev, item) => {
        const prevNext = prev + item
        minLenArr.push(prevNext)
        return prevNext
      }, '')

      let pref = ''
      let prefPrev = ''
      let stop = false
      minLenArr.forEach(itemMin => {
        if (!stop) {
          let current = 0
          while (!stop && current < strs.length) {
            if (!stop && strs[current].indexOf(itemMin) === 0) {
              pref = itemMin
            } else {
              pref = prefPrev
              stop = true
              break
            }
            current += 1
          }
          prefPrev = !stop ? itemMin : prefPrev
        }
      })
      return pref
    }

    const strsArr = [
      ['flower', 'flow', 'flight'],
      ['dog', 'racecar', 'car'],
      ['reflower', 'flow', 'flight'],
    ]
    let output = strsArr.map(item => getLongestCommonPrefix(item))
    // console.info('[]', { output })
    // output = true
    const expected = ['fl', '', '']
    expect(output).toEqual(expected)
  })
})

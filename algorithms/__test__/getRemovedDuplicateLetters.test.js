import { consoler } from '../../tools/consoler'

/**
 * @Description Exploring algorithms
 * @comment I have misunderstanding or disagreement with the login in the example:
 *          { isActive: true, input: 'cbacdcbc', expected: 'adbc' },
 * @link https://leetcode.com/problems/remove-duplicate-letters/description/
 * @command to run `yarn jest getRemovedDuplicateLetters.test`
 */

describe('Algoritms', () => {
  it('-- getRemovedDuplicateLetters', () => {
    const getRemovedDuplicateLetters = s => {
      const arr10 = s.split('').map((item, index) => ({ item, index }))
      const arr20 = arr10
        .sort((a, b) => a.item.localeCompare(b.item))
        .map((item2, index) => ({ ...item2, alpha: index }))
        .map(obj => {
          const { item } = obj
          const places = arr10.reduce((accum, obj) => {
            let output = obj.item === item ? [obj.index] : []
            return [...accum, ...output]
          }, [])
          return { ...obj, places }
        })
        .sort((a, b) => a.index - b.index)

      // consoler('[25]', 'arr20', { arr20 })

      let output = []
      const sLen = s.length

      for (let i = 0; i < sLen; i += 1) {
        const { item, index, alpha, places } = arr20[i]

        let caseNo = 0
        let sliceOfScope = []
        let foundLess = {}
        let foundAlready = {}
        let placeStart = 0
        let placeFinish = 0

        if (places.length === 1) {
          caseNo = 1
          output = [...output, arr20[i]]
        } else {
          caseNo = 2
          placeStart = i + 1
          placeFinish = places[places.length - 1]
          sliceOfScope = arr20.slice(placeStart, placeFinish)
          foundLess =
            sliceOfScope &&
            sliceOfScope.length &&
            sliceOfScope.find(obj => obj.alpha < alpha)
          foundAlready = output.find(obj => obj.item === item)

          if (!foundAlready && !foundLess) {
            caseNo = 3
            output = [...output, arr20[i]]
          }
        }

        // consoler('[35]', `arrForward ${i}`, {
        //   i,
        //   caseNo,
        //   'arr20[i]': arr20[i],
        //   'places.length - 1': places.length - 1,
        //   placeStart,
        //   placeFinish,
        //   sliceOfScope,
        //   foundLess,
        //   foundAlready,
        //   output,
        // })
      }

      return output.map(obj => obj.item).join('')
    }

    const tests = [
      { isActive: false, input: 'bcabc', expected: 'abc' },
      { isActive: true, input: 'cbacdcbc', expected: 'adbc' },
      { isActive: false, input: 'ecbacdcbc', expected: 'eacdb' },
    ]

    tests.forEach(test => {
      const { isActive, input, expected } = test

      if (isActive) {
        let outputed = getRemovedDuplicateLetters(input)
        // console.info('[]', { outputed })

        expect(outputed).toEqual(expected)
      }
    })
  })
})

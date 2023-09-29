/**
 * @Description Exploring algorithms
 * @command to run `yarn jest getFirstNonRepeatingChar.test`
 */

describe('Algoritms', () => {
  it('-- 2023-09-28 II. getFirstNonRepeatingChar', () => {
    const getFirstNonRepeatingChar = str => {
      const strArr = str.slice().split('')
      let res
      for (let i = 0; i < strArr.length; i += 1) {
        if (strArr.filter(item => item === strArr[i]).length === 1) {
          res = strArr[i]
          break
        }
      }

      return res
    }

    const tests = [
      { input: 'reverse words in a sentence', expected: 'v' },
      { input: 'ABCBCBC BACC CAB D ABABC C E BCBCBC F ABABC G', expected: 'D' },
    ]

    tests.forEach(test => {
      const { input, expected } = test
      let output = getFirstNonRepeatingChar(input)
      // console.info('getFirstNonRepeatingChar.test [32]', { output })
      expect(output).toEqual(expected)
    })
  })

  it('-- 2023-09-28 I. getFirstNonRepeatingChar', () => {
    const getFirstNonRepeatingChar = str => {
      const objTemp = {}
      str
        .slice()
        .split('')
        .forEach(item => {
          if (objTemp[item] === undefined) objTemp[item] = true
          else if (objTemp[item] === true) objTemp[item] = false
        })

      return Object.keys(objTemp).reduce((accum, key) => {
        if (objTemp[key] === false) return accum
        return [...accum, key]
      }, [])[0]
    }

    const tests = [
      { input: 'reverse words in a sentence', expected: 'v' },
      { input: 'ABCBCBC BACC CAB D ABABC C E BCBCBC F ABABC G', expected: 'D' },
    ]

    tests.forEach(test => {
      const { input, expected } = test
      let output = getFirstNonRepeatingChar(input)
      expect(output).toEqual(expected)
    })
  })

  it('-- 2022-01-18 getFirstNonRepeatingChar', () => {
    const getFirstNonRepeatingChar = str => {
      const strArr = str.slice().split('')
      let output = ''

      for (let i = 0; i < strArr.length; i += 1) {
        let count = 0
        output = ''
        strArr.forEach(item => {
          if (strArr[i] === item) {
            count += 1
            output = item
          }
        })
        if (count === 1) break
      }
      return output
    }

    const str = 'reverse words in a sentence'

    let output = getFirstNonRepeatingChar(str)
    const expected = 'v'
    expect(output).toEqual(expected)
  })
})

/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- func integerToRoman', () => {
    const integerToRoman = num => {
      let temp = num

      const rDict = [
        { rom: 'M', arab: 1000 },
        { rom: 'CM', arab: 900 },
        { rom: 'D', arab: 500 },
        { rom: 'CD', arab: 400 },
        { rom: 'C', arab: 100 },
        { rom: 'XC', arab: 90 },
        { rom: 'L', arab: 50 },
        { rom: 'XL', arab: 40 },
        { rom: 'X', arab: 10 },
        { rom: 'IX', arab: 9 },
        { rom: 'V', arab: 5 },
        { rom: 'IV', arab: 4 },
        { rom: 'I', arab: 1 },
      ]

      let res = []
      let i = 0
      while (temp > 0) {
        const { rom, arab } = rDict[i]
        const val = Math.floor(temp / arab)

        if (val > 0) {
          let romNext = rom

          if (val >= 1 && val <= 3) {
            romNext = rom.repeat(val)
          }

          res = [...res, romNext]
        }

        temp = temp - val * arab
        i += 1
      }

      return res.join('')
    }

    const inputArr = [3, 37, 58, 1994]

    const outputed = inputArr.map(item => integerToRoman(item))
    const expected = ['III', 'XXXVII', 'LVIII', 'MCMXCIV']
    // console.info('', { outputed, expected })
    expect(outputed).toEqual(expected)
  })
})

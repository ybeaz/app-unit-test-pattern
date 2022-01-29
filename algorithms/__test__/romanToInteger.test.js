/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- func romanToInteger.test', () => {
    const romanToInteger = str => {
      let temp = str

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

      let res = 0

      while (temp.length > 0) {
        rDict.forEach(item => {
          const { rom, arab } = item

          const romLen = rom.length

          const romSliced = temp.slice(0, romLen)

          if (romSliced === rom) {
            res += arab
            temp = temp.slice(romLen)
          }
        })
      }

      return res
    }

    const inputArr = ['III', 'XXXVII', 'LVIII', 'MCMXCIV']

    const outputed = inputArr.map(item => romanToInteger(item))
    const expected = [3, 37, 58, 1994]
    // console.info('', { outputed, expected })
    expect(outputed).toEqual(expected)
  })
})

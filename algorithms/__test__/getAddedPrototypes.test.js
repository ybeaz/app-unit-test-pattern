/**
 * @Description Exploring algorithms
 * @command to run `yarn jest template.test`
 */

describe('Algoritms', () => {
  it('-- getAddedPrototypes', () => {
    const str = '1rem'

    const getPxOfRem = function (remString, options) {
      const { multiplier, listOfAcceptedRemValues, printRes } = options

      if (
        listOfAcceptedRemValues.length &&
        !listOfAcceptedRemValues.find(item => item === remString)
      )
        console.error(
          'getPxOfRem [23]',
          `Please, add the used rem value ${remString} to the accepted list in the file src/ViewLayer/Styles/styleGlobal.ts`
        )

      const rem = remString.split('rem')
      const res = rem.length ? parseFloat(rem[0]) * multiplier : undefined

      if (printRes) {
        console.log('getPxOfRem', 'res', res)
      }

      return res
    }

    String.prototype.getPx = function () {
      const remString = this
      return getPxOfRem(remString, {
        multiplier: 16,
        listOfAcceptedRemValues: [],
        printRes: false,
      })
    }

    const tests = [
      { input: '0.75rem', expected: 12 },
      { input: '0.875rem', expected: 14 },
      { input: '1rem', expected: 16 },
      { input: '1.5rem', expected: 24 },
      { input: '2rem', expected: 32 },
    ]

    tests.forEach(test => {
      const { input, expected } = test
      const outputed = input.getPx()
      // console.info('[]', { outputed, '2rem': '2rem'.getPx() })
      expect(outputed).toEqual(expected)
    })
  })
})

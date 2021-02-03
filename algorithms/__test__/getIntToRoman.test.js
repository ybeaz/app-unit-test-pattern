/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Algoritms', () => {
  it('-- getIntToRoman', () => {
    const getIntToRoman = function (num) {
      const obj = {
        res: '',
        X(char = 'X') {
          let nth = Math.floor(num / 10)
          nth = nth < 4 ? [...new Array(nth).fill(char)].join('') : ''
          this.res = this.res + nth
          return this
        },
        IX(char = 'IX') {
          let nth = num - Math.floor(num / 10) * 10
          nth = nth === 9 ? [...new Array(1).fill(char)].join('') : ''
          this.res = this.res + nth
          return this
        },
        V(char = 'V') {
          let nth = num - Math.floor(num / 10) * 10
          nth = nth > 4 && nth < 9 ? [...new Array(1).fill(char)].join('') : ''
          this.res = this.res + nth
          return this
        },
        IV(char = 'IV') {
          let nth = num - Math.floor(num / 10) * 10
          nth = nth === 4 ? [...new Array(1).fill(char)].join('') : ''
          this.res = this.res + nth
          return this
        },
        I(char = 'I') {
          let nth = num - Math.floor(num / 10) * 10
          let counter = 0
          if (nth < 4) {
            nth = [...new Array(nth).fill(char)].join('')
          } else if (5 < nth && nth < 9) {
            nth = [...new Array(nth - 5).fill(char)].join('')
          } else {
            nth = ''
          }

          this.res = this.res + nth
          return this
        },
        run() {
          return this.res
        },
      }
      return obj.X().IX().V().IV().I().run()
    }

    const arrInp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 21, 29, 36, 37]

    let output = arrInp.map(item => getIntToRoman(item))
    const expected = [
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
      'X',
      'XI',
      'XII',
      'XIII',
      'XXI',
      'XXIX',
      'XXXVI',
      'XXXVII',
    ]
    expect(output).toEqual(expected)
  })
})

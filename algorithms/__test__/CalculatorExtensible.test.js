/**
 * @Description Exploring algorithms
 * @command to run `yarn jest fileName.test`
 */

describe('Algoritms', () => {
  it('-- CalculatorExtensible', () => {
    function CalculatorExtensible() {
      this.collection = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
      }
      this.addMethod = (action, func) => {
        this.collection[action] = func
      }
      this.calculate = exprStr => {
        const exprArr = exprStr.split(' ')
        let [x, action, y] = exprArr
        x = parseFloat(x)
        y = parseFloat(y)
        return this.collection[action](x, y)
      }
    }

    const calc = new CalculatorExtensible()
    let output = calc.calculate('4 + 9')
    let expected = 13
    expect(output).toEqual(expected)

    calc.addMethod('*', (x, y) => x * y)
    output = calc.calculate('3 * 9')
    expected = 27
    expect(output).toEqual(expected)
  })
})

// calc.calculate('5 + 6')
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// powerCalc.calculate("2 ** 3"); // 8

describe('Behavioral Patterns', () => {
  it('--  Pattern: Interpreter  A way to include language elements in a program', () => {
    function Context(input) {
      this.input = input
      this.output = 0
    }

    function Interpreter(name, one, four, five, nine, multiplier) {
      this.name = name
      this.one = one
      this.four = four
      this.five = five
      this.nine = nine
      this.multiplier = multiplier
    }

    Interpreter.prototype = {
      startInputWith(input, str) {
        return input.substr(0, str.length) === str
      },
      interpret(context) {
        if (context.input.length === 0) return
        else if (this.startInputWith(context.input, this.nine)) {
          context.output += 9 * this.multiplier
          context.input = context.input.substr(2)
        } else if (this.startInputWith(context.input, this.five)) {
          context.output += 5 * this.multiplier
          context.input = context.input.substr(1)
        } else if (this.startInputWith(context.input, this.four)) {
          context.output += 4 * this.multiplier
          context.input = context.input.substr(2)
        } else if (this.startInputWith(context.input, this.one)) {
          while (this.startInputWith(context.input, this.one)) {
            console.info('while', { 'context.output': context.output })
            context.output += 1 * this.multiplier
            context.input = context.input.substr(1)
          }
        }
      },
    }

    const roman = 'MMCDXXI'
    const tree = []
    const context = new Context(roman)

    tree.push(new Interpreter('thousand', 'M', ' ', ' ', ' ', 1000))
    tree.push(new Interpreter('hundred', 'C', 'CD', 'D', 'CM', 100))
    tree.push(new Interpreter('ten', 'X', 'XL', 'L', 'XC', 10))
    tree.push(new Interpreter('one', 'I', 'IV', 'V', 'IX', 1))

    tree.forEach(item => item.interpret(context))

    // console.info('context', { context })

    const expected = 2421
    expect(context.output).toBe(expected)
  })
})

// Context
// input
// output

// Expression
// name, one, four, five, nine, multiplier

// Expression
// startInputWith
// str
// interpret

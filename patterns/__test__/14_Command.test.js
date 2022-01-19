/**
 * @Description ...
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest fileName.test`
 */

describe('Behavioral Patterns', () => {
  it('--  Pattern: Command  Encapsulate a command request as an object', () => {
    function add(x, y) {
      return x + y
    }
    function sub(x, y) {
      return x - y
    }
    function mul(x, y) {
      return x * y
    }
    function div(x, y) {
      return x / y
    }

    function Command(execute, undo, value) {
      this.execute = execute
      this.undo = undo
      this.value = value
    }

    function AddCommand(value) {
      this.execute = add
      this.undo = sub
      this.value = value
    }

    function SubCommand(value) {
      this.execute = sub
      this.undo = add
      this.value = value
    }

    function MulCommand(value) {
      this.execute = mul
      this.undo = div
      this.value = value
    }

    function DivCommand(value) {
      this.execute = div
      this.undo = mul
      this.value = value
    }

    function Calculator() {
      let currentValue = 0
      let commands = []
      let actions = []

      const getAction = function (command) {
        const name = command.execute.toString().substr(9, 3)
        return name.charAt(0).toUpperCase() + name.slice(1)
      }
      return {
        execute(command) {
          commands = [...commands, command]
          const action = getAction(command)
          actions = [...actions, action]
          currentValue = command.execute(currentValue, command.value)
        },
        undo() {
          const command = commands.pop()
          const action = getAction(command)
          actions = [...actions, `undo ${action}`]
          currentValue = command.undo(currentValue, command.value)
        },
        getState() {
          return { currentValue, commands, actions }
        },
      }
    }

    const calculator = new Calculator()

    calculator.execute(new AddCommand(100))
    calculator.execute(new SubCommand(24))
    // console.info('[1]', { actions: calculator.getState().actions })
    let expected = ['Add', 'Sub']
    expect(calculator.getState().actions).toEqual(expected)
    expect(calculator.getState().currentValue).toBe(76)

    calculator.execute(new MulCommand(6))
    calculator.execute(new DivCommand(2))
    // console.info('[2]', { actions: calculator.getState().actions })
    expected = ['Add', 'Sub', 'Mul', 'Div']
    expect(calculator.getState().actions).toEqual(expected)
    expect(calculator.getState().currentValue).toBe(228)

    calculator.undo()
    calculator.undo()
    // console.info('[3]', { actions: calculator.getState().actions })
    expected = ['Add', 'Sub', 'Mul', 'Div', 'undo Div', 'undo Mul']
    expect(calculator.getState().actions).toEqual(expected)
    expect(calculator.getState().currentValue).toBe(76)
  })
})

// add
// x, y

// sub
// x, y

// mul
// x, y

// div
// x, y

// Command
// execute, undo, value
// execute
// undo
// value

// AddCommand
// value
// Command
// add, sub, value

// SubCommand
// value
// Command
// sub, add, value

// MulCommand
// value
// Command
// mul, div, value

// DivCommand
// value
// Command
// div, mul, value

// Calculator
// current
// commands
// action
// command
// name

// execute
// command
// current
// commands

// undo
// command
// current

// getCurrentValue

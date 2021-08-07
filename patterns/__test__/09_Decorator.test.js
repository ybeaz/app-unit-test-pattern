describe('Structural Patterns', () => {
  it('-- Pattern: Decorator   with @ notation', () => {
    function log2(name) {
      return function decorator(t, n, descriptor) {
        const original = descriptor.value
        if (typeof original === 'function') {
          descriptor.value = function (...args) {
            console.log(`Arguments for ${name}: ${args}`)
            try {
              const result = original.apply(this, args)
              console.log(`Result from ${name}: ${result}`)
              return result
            } catch (e) {
              console.log(`Error from ${name}: ${e}`)
              throw e
            }
          }
        }
        return descriptor
      }
    }

    function log(target, name, descriptor) {
      console.info('09_Decorator.test [24]', { target, name, descriptor })
      const original = descriptor.value
      if (typeof original === 'function') {
        descriptor.value = function (...args) {
          console.log(`Arguments: ${args}`)
          try {
            const result = original.apply(this, args)
            console.log(`Result: ${result}`)
            return result
          } catch (e) {
            console.log(`Error: ${e}`)
            throw e
          }
        }
      }
      return descriptor
    }

    class Example {
      @log
      sum(a, b) {
        return a + b
      }
    }

    const e = new Example()

    console.info('09_Decorator.test [33]', { sum: e.sum(1, 2) })
  })

  it('-- Pattern: Decorator/ HOF  Modify the output adding a function dynamicly', () => {
    const arrTest = [
      {
        input: [2, 3],
        key: 'sum',
        expected: 'result of sum(2, 3) = 5, tested successfully',
      },
      {
        input: [6, 4],
        key: 'sub',
        expected: 'result of sub(6, 4) = 2, tested successfully',
      },
      {
        input: [5, 4],
        key: 'mult',
        expected: 'result of mult(5, 4) = 20, tested successfully',
      },
      {
        input: [15, 3],
        key: 'div',
        expected: 'result of div(15, 3) = 5, tested successfully',
      },
    ]
    const sum = (a, b) => a + b
    const sub = (a, b) => a - b
    const mult = (a, b) => a * b
    const div = (a, b) => a / b

    const funcWithReport = (func, args) => {
      const [a, b] = args
      const startReport = `result of ${
        func.name
      }(${a.toString()}, ${b.toString()}) = `

      const res = func(...args)

      const finishReport = ', tested successfully'
      return startReport + res.toString() + finishReport
    }

    const reportTest = {
      sum: (...args) => funcWithReport(sum, args),
      sub: (...args) => funcWithReport(sub, args),
      mult: (...args) => funcWithReport(mult, args),
      div: (...args) => funcWithReport(div, args),
    }

    const res = arrTest.map(item => {
      const { input, key, expected } = item
      return reportTest[key](...input)
    })

    const expected = arrTest.map(item => item.expected)
    expect(res).toEqual(expected)
  })

  it('-- Pattern: Decorator  Add responsibilities to objects dynamically', () => {
    const User = function (name) {
      this.userName = `Name: ${name}`
      this.index = function () {
        return '94111'
      }
      this.outcome = function () {
        return this.name
      }
    }

    function decorator(User) {
      return function (name, address) {
        const user = new User(...arguments)

        // We close all existing properties
        Object.keys(user).forEach(item => {
          this[item] = user[item]
        })

        // We modify existing function property
        this.outcome = function () {
          return `${user.userName}, Address: ${address}, Index: ${this.index()}`
        }

        // We add a function property
        this.address = function () {
          return `Address: ${address}, Index: ${this.index()}`
        }
      }
    }

    const UserDecorated = decorator(User)
    const userDecorated = new UserDecorated(
      'Mikhail',
      '10 Market st., San Bruno'
    )

    let expected = 'Name: Mikhail'
    expect(userDecorated.userName).toBe(expected)

    expected = '94111'
    expect(userDecorated.index()).toBe(expected)

    expected = 'Name: Mikhail, Address: 10 Market st., San Bruno, Index: 94111'
    expect(userDecorated.outcome()).toBe(expected)

    expected = 'Address: 10 Market st., San Bruno, Index: 94111'
    expect(userDecorated.address()).toBe(expected)
  })
})

// User
// name
// say

// DecoratedUser
// user, street, city
// user
// name
// street
// city
// say

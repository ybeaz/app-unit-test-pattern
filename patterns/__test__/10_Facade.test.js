describe('Structural Patterns', () => {
  it('-- Pattern: Facade  A single class that represents an entire subsystem', () => {
    const Bank = function () {
      this.verify = function (amount) {
        // Some logic
        if (amount > 1000000) {
          return false
        }
        return true
      }
    }

    const Credit = function () {
      this.get = function (name) {
        // Some logic
        return true
      }
    }

    const Background = function () {
      this.check = function (name) {
        // Some logic
        if (name === 'Asama Ben Laden') {
          return false
        }
        return true
      }
    }

    function Mortgage(name) {
      this.name = name
    }

    Mortgage.prototype = {
      applyFor(amount) {
        let result = 'approved'

        if (!new Bank().verify(amount)) result = 'denied'
        if (!new Credit().get(this.name)) result = 'denied'
        if (!new Background().check(this.name)) result = 'denied'

        return result
      },
    }

    const result = new Mortgage('John Smith').applyFor(10000)
    let expected = 'approved'
    expect(result).toBe(expected)

    const result02 = new Mortgage('John Smith').applyFor(10000000)
    expected = 'denied'
    expect(result02).toBe(expected)

    const result03 = new Mortgage('Asama Ben Laden').applyFor(10000)
    expected = 'denied'
    expect(result03).toBe(expected)
  })
})

// Mortgage
// name

// Mortgage
// applyFor
// amount
// result

// Bank
// verify
// name, amount

// Credit
// get

// Background
// check

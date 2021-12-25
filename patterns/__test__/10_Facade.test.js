/**
 * @description The intent of the Façade is to provide a high-level interface (properties and methods) that makes a subsystem or toolkit easy to use for the client.
 * @link https://www.dofactory.com/javascript/design-patterns/facade
 * @test yarn jest patterns/__test__/10_Facade.test.js
 */

// Bank
// verify
// name, amount

// Credit
// get

// Background
// check

describe('Structural Patterns', () => {
  it('-- 2021-12-24 Pattern: Facade  A single class that represents an entire subsystem', () => {
    const Bank = function () {
      this.verify = function (ammount2) {
        let approved = true
        if (ammount2 > 100000) approved = false
        return approved
      }
    }

    const Credit = function () {
      this.get = function (ammount2) {
        let approved = true
        if (ammount2 > 10000) approved = false
        return approved
      }
    }

    const Background = function () {
      this.check = function (name2) {
        let approved = true
        if (name2 === 'Asama Ben Laden') approved = false
        return approved
      }
    }

    const Mortgage = function (name) {
      this.name = name
    }

    Mortgage.prototype.applyFor = function (amount) {
      let result = 'approved'

      if (!new Bank().verify(amount)) result = 'denied'
      if (!new Credit().get(this.name)) result = 'denied'
      if (!new Background().check(this.name)) result = 'denied'

      return result
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

  it('-- 2020-11-01 Pattern: Facade  A single class that represents an entire subsystem', () => {
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

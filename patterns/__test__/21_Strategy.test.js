/**
 * @description Pattern: Strategy Encapsulates an algorithm inside a class
 * @narrative
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 21_Strategy.test`
 */

describe('Behavioral Patterns', () => {
  it('--  Pattern: Strategy Encapsulates an algorithm inside a class', () => {
    function Shipping() {
      this.company = {}
    }
    Shipping.prototype = {
      setStrategy(company) {
        this.company = company
      },
      delivery() {
        return {
          company: this.company.name,
          fare: this.company.calculate(),
        }
      },
    }

    const UPS = function () {
      this.name = 'UPS'
      this.calculate = function () {
        return '$20'
      }
    }

    const USPS = function () {
      this.name = 'USPS'
      this.calculate = function () {
        return '$30'
      }
    }

    const Fedex = function () {
      this.name = 'Fedex'
      this.calculate = function () {
        return '$40'
      }
    }

    const ups = new UPS()
    const usps = new USPS()
    const fedex = new Fedex()

    const shipping = new Shipping(ups)

    shipping.setStrategy(ups)
    let expected = { company: 'UPS', fare: '$20' }
    expect(shipping.delivery()).toEqual(expected)

    shipping.setStrategy(usps)
    expected = { company: 'USPS', fare: '$30' }
    expect(shipping.delivery()).toEqual(expected)

    shipping.setStrategy(fedex)
    expected = { company: 'Fedex', fare: '$40' }
    expect(shipping.delivery()).toEqual(expected)
  })
})

// Shipping
// company

// Shipping
// setStrategy
// company
// calculate

// UPS
// USPS
// Fedex
// calculate

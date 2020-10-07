describe('Structural Patterns', () => {
  it('-- Pattern: Adapter	Match interfaces of different classes', () => {
    function Shipping() {
      this.request = function (zipStart, zipEnd, weight) {
        return 45
      }
    }

    function AdvacedShipping() {
      this.login = function (credentials) {
        // Do something
      }
      this.setStart = function (zipStart) {
        // Do something
      }
      this.setDestination = function (zipEnd) {
        // Do something
      }
      this.caclculate = function (weight) {
        return 37
      }
    }

    function AdaptorToAdvacedShipping(credentials) {
      const advancedShipping = new AdvacedShipping()
      advancedShipping.login(credentials)
      return {
        request(zipStart, zipEnd, weight) {
          advancedShipping.setStart(zipStart)
          advancedShipping.setDestination(zipEnd)
          return advancedShipping.caclculate(weight)
        },
      }
    }

    let shipping = new Shipping()
    let price = shipping.request('ZIPSTART', 'ZIPEND', 50)
    let expected = 45
    expect(price).toBe(expected)

    shipping = new AdaptorToAdvacedShipping({ token: 'abc-123' })
    price = shipping.request('ZIPSTART', 'ZIPEND', 50)
    expected = 37
    expect(price).toBe(expected)
  })
})

// Shipping
// request

// AdvancedShipping
// login
// setStart
// setDestination
// calculate

// ShippingAdapter
// shipping
// request
// zipStart, zipEnd, weight

/**
 * @Description ...
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest fileName.test`
 */

describe('Creational Patterns', () => {
  it('--  Pattern: Prototype	A fully initialized instance to be copied or cloned', () => {
    function Customer(first, last, status = 'n/a') {
      this.first = first
      this.last = last
      this.status = status
      this.getCustomer = function () {
        return new Customer()
      }
    }

    function Prototype(Proto, defaultProto) {
      const proto = new Proto()
      const protoKeys = Object.keys(proto)

      this.clone = function () {
        const obj = {}
        protoKeys.forEach(key => {
          if (defaultProto[key]) {
            obj[key] = defaultProto[key]
          }
        })
        return obj
      }
    }

    const defaultProto = new Customer('John', 'Smith')

    const instance = new Prototype(Customer, defaultProto)

    let cloned = instance.clone()
    delete cloned.getCustomer

    let expected = {
      first: 'John',
      last: 'Smith',
      status: 'n/a',
    }

    expect(cloned).toEqual(expected)
  })
})

// CustomerPrototype
// proto
// clone

// Customer
// first, last, status

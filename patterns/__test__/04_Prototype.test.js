/**
 * @Description ...
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest fileName.test`
 */

describe('Creational Patterns', () => {
  it('-- 2023-09-25 Pattern: Prototype	A fully initialized instance to be copied or cloned', () => {
    function Customer(first, last, status = 'n/a') {
      this.first = first
      this.last = last
      this.status = status
      this.getCustomer = function () {
        return new Customer()
      }
      this.getFullName = function () {
        return `${this.first} ${this.last}`
      }
    }

    function PrototypePrev(Proto, defaultProto) {
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

    /* Probably we loose here something (?) compared to PrototypePrev (?) */
    function Prototype(defaultProto) {
      this.clone = function () {
        return { ...defaultProto }
      }
    }

    const defaultProto = new Customer('John', 'Smith')

    const instance = new Prototype(Customer, defaultProto)

    let cloned = instance.clone()

    const fullName = cloned.getFullName()
    expect('John Smith').toEqual(expected)

    delete cloned.getCustomer
    delete cloned.getFullName

    let expected = {
      first: 'John',
      last: 'Smith',
      status: 'n/a',
    }

    expect(cloned).toEqual(expected)
  })

  it('-- 2022-01-18 Pattern: Prototype	A fully initialized instance to be copied or cloned', () => {
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

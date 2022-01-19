/**
 * @Description ...
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest fileName.test`
 */

describe('Behavioral Patterns', () => {
  it("--  Pattern: Memento Capture and restore an object's internal state", () => {
    function Person(name, street, city, state) {
      this.name = name
      this.street = street
      this.city = city
      this.state = state
    }

    Person.prototype = {
      dehydrate: function (memento) {
        const m = JSON.parse(memento)
        this.name = m.name
        this.street = m.street
        this.city = m.city
        this.state = m.state
      },
      hydrate: function () {
        return JSON.stringify(this)
      },
    }

    const CareTaker = function () {
      this.mementos = {}
      this.add = function (key, memento) {
        this.mementos[key] = memento
      }
      this.get = function (key) {
        return this.mementos[key]
      }
    }

    let mike = new Person('Mike', 'Taraval', 'San Francisco', 'CA')
    let renata = new Person('Renata', 'San Frosty', 'San Paolo', 'PA')

    const careTaker = new CareTaker()
    careTaker.add('mike', mike.hydrate())
    careTaker.add('renata', renata.hydrate())

    mike.name = 'King Kong'
    renata.name = 'Sophia'

    mike.dehydrate(careTaker.get('mike'))
    renata.dehydrate(careTaker.get('renata'))

    expect(mike.name).toBe('Mike')
    expect(renata.name).toBe('Renata')
  })
})

// Person
// name
// street
// city
// state

// Person
// hydrate
// memento
// dehydrate
// memento
// m
// name
// street
// city
// state

// CareTaker
// mementos
// add
// get

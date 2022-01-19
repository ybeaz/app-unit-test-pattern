/**
 * @Description ...
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest fileName.test`
 */

describe('Creational Patterns', () => {
  it('--  Pattern: Factory Method	Creates an instance of several derived classes', () => {
    function FullTime() {
      this.hourly = 12
    }

    function PartTime() {
      this.hourly = 11
    }

    function Temporary() {
      this.hourly = 10
    }

    function Contractor() {
      this.hourly = 15
    }

    function factory(type) {
      const employee = {
        fulltime: new FullTime(),
        parttime: new PartTime(),
        temporary: new Temporary(),
        contractor: new Contractor(),
      }[type]

      employee.type = type
      return employee
    }

    const employees = [
      factory('fulltime'),
      factory('fulltime'),
      factory('fulltime'),
      factory('parttime'),
      factory('temporary'),
      factory('temporary'),
      factory('contractor'),
    ]

    // console.info('[10]', { employees })
    expect(true).toBe(true)
  })
})

// Factory
// createEmployee
// employee

// FullTime
// hourly

// PartTime
// hourly

// Temporary
// hourly

// Contractor
// hourly

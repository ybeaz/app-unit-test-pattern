describe('Creational Patterns', () => {
  it('--  Pattern: Abstract Factory  Creates an instance of several families of classes', () => {
    function Employee(name) {
      this.name = name
      this.report = function () {
        return `Employee: ${this.name}`
      }
    }

    function Vendor(name) {
      this.name = name
      this.report = function () {
        return `Vendor: ${this.name}`
      }
    }

    function EmployeeFactory() {
      this.num = 0
      this.create = function (name) {
        this.num += 1
        return new Employee(name)
      }
      this.getNum = function () {
        return this.num
      }
    }

    function VendorFactory() {
      this.num = 0
      this.create = function (name) {
        this.num += 1
        return new Vendor(name)
      }
      this.getNum = function () {
        return this.num
      }
    }

    const employeeFactory = new EmployeeFactory()
    const vendorFactory = new VendorFactory()
    let staff = []

    staff.push(employeeFactory.create('Joan DiSilva'))
    staff.push(employeeFactory.create("Tim O'Neill"))
    staff.push(vendorFactory.create('Gerald Watson'))
    staff.push(vendorFactory.create('Nicole McNight'))

    let report = staff.reduce((res, item, i, arr) => {
      const { name } = item
      return [...res, { name, rep: item.report() }]
    }, [])

    let expected = [
      { name: 'Joan DiSilva', rep: 'Employee: Joan DiSilva' },
      { name: "Tim O'Neill", rep: "Employee: Tim O'Neill" },
      { name: 'Gerald Watson', rep: 'Vendor: Gerald Watson' },
      { name: 'Nicole McNight', rep: 'Vendor: Nicole McNight' },
    ]
    expect(report).toEqual(expected)

    const employeeNum = employeeFactory.getNum()
    expected = 2
    expect(employeeNum).toBe(expected)

    const vendorNum = vendorFactory.getNum()
    expected = 2
    expect(vendorNum).toBe(expected)
  })
})

// Employee
// name
// say

// EmployeeFactory
// create

// Vendor
// name
// say

// VendorFactory
// create

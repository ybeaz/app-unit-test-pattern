describe('Behavioral Patterns', () => {
  it('--  Pattern: Visitor  Defines a new operation to a class without change', () => {
    var Employee = function (name, salary, vacation) {
      this.empName = name
      this.salary = salary
      this.vacation = vacation

      var self = this

      this.accept = function (visitor) {
        visitor.visit(self)
      }

      this.accept02 = function (visitor) {
        visitor(self)
      }

      this.getName = function () {
        return this.empName
      }

      this.getSalary = function () {
        return this.salary
      }

      this.setSalary = function (sal) {
        this.salary = sal
      }

      this.getVacation = function () {
        return this.vacation
      }

      this.setVacation = function (vac) {
        vacation = vac
      }
    }

    var ExtraSalary = function () {
      this.visit = function (emp) {
        emp.setSalary(emp.getSalary() * 1.1)
      }
    }

    var ExtraVacation = function () {
      this.visit = function (emp) {
        emp.setVacation(emp.getVacation() + 2)
        // emp.newPlace = 'New cabinet and new table'
      }
    }

    // Show initial salary value
    const john = new Employee('John', 10000, 10)
    let expected = 10000
    expect(john.getSalary()).toBe(expected)

    // Modify property of the instance
    function extraSalary02(emp) {
      emp.setSalary(emp.getSalary() * 1.1)
    }
    john.accept02(extraSalary02)
    expected = 11000
    expect(john.getSalary()).toBe(expected)

    // Add new property to the instance
    john.setDoubleSalary = function () {
      this.salary = 2 * this.salary
    }
    john.setDoubleSalary()
    expected = 22000
    expect(john.getSalary()).toBe(expected)
    // let johnInfo = {
    //   name: john.getName(),
    //   salary: john.getSalary(),
    //   vacation: john.getVacation(),
    // }
    // console.info('log [9]', johnInfo)
  })
})

// Employee
// name, salary, vacation
// self
// accept
// visitor
// visit
// getName
// getSalary
// setSalary
// sal
// salary
// getVacation
// setVacation
// vac
// vacation

// ExtraSalary
// visit
// emp

// ExtraVacation
// visit
// emp

/**
 * @description Pattern: Visitor Defines a new operation to a class without change
 * @narrative
      The Visitor Pattern is a behavioral design pattern that allows you to define a new operation (visitor) without changing the classes of the elements on which it operates. It's particularly useful when you have a set of classes with a fixed structure, and you want to perform different operations on them without modifying their code. Here are some common use cases for applying the Visitor Pattern:

      Document Object Models (DOM) in XML/HTML Processing:

      Scenario: When working with document object models representing XML or HTML structures.
      Use Case: The Visitor Pattern can be applied to define operations such as element traversal, modification, or extraction without modifying the structure of XML or HTML classes.
      Abstract Syntax Tree (AST) Processing:

      Scenario: When processing abstract syntax trees representing the structure of programming language code.
      Use Case: The Visitor Pattern is useful for defining operations like code analysis, optimization, or transformation without altering the classes that represent different nodes in the AST.
      Compiler Design:

      Scenario: When designing compilers that involve various stages of code generation and optimization.
      Use Case: The Visitor Pattern can be applied to define different visitors for lexical analysis, syntax analysis, code generation, and optimization without modifying the syntax tree or intermediate code classes.
      Database Query Processing:

      Scenario: When processing database queries and defining operations like query optimization.
      Use Case: The Visitor Pattern can be used to define visitors for query optimization, execution planning, or result processing without modifying the classes representing database queries.
      GUI Component Frameworks:

      Scenario: When developing GUI frameworks with various UI components.
      Use Case: The Visitor Pattern can be applied to define visitors for rendering, event handling, or other operations on UI components without modifying the component classes.
      File System Operations:

      Scenario: When working with a file system structure and defining operations like file traversal or manipulation.
      Use Case: The Visitor Pattern can be used to define visitors for tasks such as file copying, deletion, or searching without modifying the classes representing files and directories.
      Network Protocol Processing:

      Scenario: When designing systems that handle network protocols with different message types.
      Use Case: The Visitor Pattern can be applied to define visitors for processing or transforming different message types without modifying the classes representing the messages.
      Symbolic Mathematics:

      Scenario: When working with symbolic mathematics expressions.
      Use Case: The Visitor Pattern can be used to define visitors for tasks such as simplification, differentiation, or integration of mathematical expressions without modifying the classes representing the expressions.
      Game Development:

      Scenario: When developing games with complex object hierarchies and behaviors.
      Use Case: The Visitor Pattern can be applied to define visitors for tasks such as AI decision-making, rendering, or collision detection without modifying the classes representing game objects.
      Financial Modeling:

      Scenario: When working with financial models with different types of financial instruments.
      Use Case: The Visitor Pattern can be used to define visitors for valuation, risk analysis, or reporting on financial instruments without modifying the classes representing the instruments.
      Visitor for Logging or Monitoring:

      Scenario: When implementing logging or monitoring in a system.
      Use Case: The Visitor Pattern can be applied to define visitors for logging or monitoring specific events or actions without modifying the classes representing the components or subsystems.
      Workflow Systems:

      Scenario: When designing workflow systems with different steps and actions.
      Use Case: The Visitor Pattern can be used to define visitors for executing or analyzing different steps in a workflow without modifying the classes representing the workflow elements.
      In summary, the Visitor Pattern is beneficial in scenarios where you have a fixed set of classes, and you want to define new operations or behaviors on them without modifying their structure. It promotes extensibility and allows for the addition of new functionalities without altering existing code.
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 23_Visitor.test`
 */

describe('Behavioral Patterns', () => {
  it('--  Pattern: Visitor Defines a new operation to a class without change', () => {
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

/**
 * @description Pattern: Factory Method	Creates an instance of several derived classes
 * @narrative 
      The Factory Method pattern is a creational design pattern that provides an interface for creating instances of a class, but allows subclasses to alter the type of instances that will be created. It defines an interface for creating objects, but leaves the choice of their type to the subclasses, creating an instance of multiple derived classes. Here are some use cases for applying the Factory Method pattern:

      Object Creation in Libraries/Frameworks:

      Scenario: In libraries or frameworks where the exact classes to be instantiated may not be known in advance.
      Use Case: The Factory Method pattern allows the library or framework to define an interface for creating objects, and the client code (using the library or framework) can provide the specific implementation by subclassing.
      Plug-in Architectures:

      Scenario: In systems that support plug-ins or extensions, where different implementations of a common interface are provided by external modules.
      Use Case: The Factory Method allows each plug-in to define its own factory for creating instances of objects that implement a shared interface.
      Customization in Frameworks:

      Scenario: In frameworks that require customization or extension points where users can provide their own implementations.
      Use Case: The Factory Method allows users of the framework to subclass a factory and provide their own logic for creating instances of objects, allowing for customization without modifying the framework's core code.
      Parameterized Object Creation:

      Scenario: When object creation involves complex initialization logic or depends on runtime parameters.
      Use Case: The Factory Method can take parameters and encapsulate the logic for creating an object based on those parameters, providing a clean and modular way to create instances.
      Testing with Mock Objects:

      Scenario: In unit testing where mock objects need to be created to replace real objects for testing purposes.
      Use Case: The Factory Method allows a testing subclass to override the factory method and return mock objects instead of real objects, facilitating testing without modifying the production code.
      Dynamic Configuration:

      Scenario: In systems where the configuration determines the types of objects to be created.
      Use Case: The Factory Method can be used to encapsulate the logic for creating objects based on the dynamic configuration, allowing for flexibility in adapting to different runtime scenarios.
      Document Generation in Document Editors:

      Scenario: In document editors where different types of documents (e.g., text documents, spreadsheets) can be created.
      Use Case: The Factory Method allows each document type to have its own factory, and the editor can use the appropriate factory based on user input or other criteria.
      Logging Frameworks:

      Scenario: In logging frameworks where different loggers (e.g., file logger, console logger) need to be created.
      Use Case: The Factory Method can be used to define a common logging interface and allow each logger type to have its own factory for creating instances.
      In summary, the Factory Method pattern is useful when you want to delegate the responsibility of creating objects to subclasses, providing flexibility for customization, extension, and adaptation to varying requirements. It promotes loose coupling and supports the open/closed principle by allowing new subclasses to be added without modifying existing code.
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 03_Factory.test`
 */

describe('Creational Patterns', () => {
  it('--  2022-01-29 Pattern: Factory Method Creates an instance of several derived classes', () => {
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

    const factoryInput = [
      'fulltime',
      'fulltime',
      'fulltime',
      'parttime',
      'temporary',
      'temporary',
      'contractor',
    ]

    const employees = factoryInput.map(
      employeeType => new factory(employeeType)
    )

    const expected = [
      { hourly: 12, type: 'fulltime' },
      { hourly: 12, type: 'fulltime' },
      { hourly: 12, type: 'fulltime' },
      { hourly: 11, type: 'parttime' },
      { hourly: 10, type: 'temporary' },
      { hourly: 10, type: 'temporary' },
      { hourly: 15, type: 'contractor' },
    ]

    // console.info('[10]', { expected, employees })
    expect(employees).toEqual(expected)
  })

  it('--  2022-01-18 Pattern: Factory Method Creates an instance of several derived classes', () => {
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

    const expected = [
      { hourly: 12, type: 'fulltime' },
      { hourly: 12, type: 'fulltime' },
      { hourly: 12, type: 'fulltime' },
      { hourly: 11, type: 'parttime' },
      { hourly: 10, type: 'temporary' },
      { hourly: 10, type: 'temporary' },
      { hourly: 15, type: 'contractor' },
    ]
    expect(employees).toEqual(expected)
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

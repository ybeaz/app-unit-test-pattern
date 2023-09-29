/**
 * @description Pattern: Template Method Defer the exact steps of an algorithm to a subclass
 * @narrative
      The Template Method Pattern is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure. Here are some common use cases for applying the Template Method Pattern:

      Algorithm Frameworks:

      Scenario: When designing frameworks where the overall algorithm structure is fixed, but specific steps can be customized by subclasses.
      Use Case: The Template Method Pattern is often used in algorithm frameworks. The superclass provides a template with common algorithm steps, and subclasses override or implement specific steps to tailor the algorithm for different scenarios.
      Code Generation:

      Scenario: When generating code automatically and allowing customization of specific parts.
      Use Case: The Template Method Pattern can be applied to code generation systems. The superclass defines the overall structure of the generated code, and subclasses can provide custom implementations for specific code snippets.
      Document Processing:

      Scenario: When processing different types of documents with a shared structure but varying content.
      Use Case: The Template Method Pattern is useful in document processing systems. The superclass defines a template for document processing, and subclasses can override methods to handle specific document types or content.
      GUI Frameworks:

      Scenario: When developing GUI frameworks with common components and customizable behaviors.
      Use Case: The Template Method Pattern can be applied in GUI frameworks where the overall behavior of a component is defined in the superclass, but specific actions or callbacks are left for subclasses to implement.
      Database Query Generation:

      Scenario: When generating database queries with a common structure but variable conditions.
      Use Case: The Template Method Pattern can be used in systems that generate database queries. The superclass provides a template for query construction, and subclasses can customize conditions or filters.
      Game Development:

      Scenario: When designing game engines with common game loops but different game-specific logic.
      Use Case: The Template Method Pattern is applicable in game development for defining the game loop structure in the superclass, allowing subclasses to implement game-specific logic.
      Testing Frameworks:

      Scenario: When developing testing frameworks with common setup and teardown procedures but varying test cases.
      Use Case: The Template Method Pattern can be used in testing frameworks. The superclass defines common testing procedures, and subclasses can provide specific test case implementations.
      Logging Systems:

      Scenario: When implementing logging systems with common log entry formatting but different log sources.
      Use Case: The Template Method Pattern can be applied in logging systems where the overall log entry formatting is defined in the superclass, and subclasses can specify details such as log sources or additional information.
      Workflow Automation:

      Scenario: When designing systems with workflows and processes that have a common structure but variable steps.
      Use Case: The Template Method Pattern can be used in workflow automation systems where the overall workflow structure is defined in the superclass, and subclasses can implement specific steps or actions.
      Network Protocols:

      Scenario: When designing systems that implement network protocols with common message formatting but variable content.
      Use Case: The Template Method Pattern can be applied in systems that handle network protocols. The superclass defines the structure of messages, and subclasses can provide specific implementations for content or payload.
      Batch Processing:

      Scenario: When implementing batch processing systems with common processing steps but varying data sources or transformations.
      Use Case: The Template Method Pattern can be used in batch processing systems where the overall processing steps are defined in the superclass, and subclasses can customize data handling or transformations.
      Educational Course Frameworks:

      Scenario: When designing frameworks for educational courses with a common structure but variable content.
      Use Case: The Template Method Pattern can be applied in educational course frameworks where the overall structure of a course is defined in the superclass, and subclasses can provide content or materials.
      In summary, the Template Method Pattern is valuable when designing frameworks or systems where the overall algorithm structure is fixed, but specific steps or behaviors need to be customized by subclasses to adapt to different scenarios.
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 22_Template.test`
 */

describe('Behavioral Patterns', () => {
  it('--  Pattern: Template Method Defer the exact steps of an algorithm to a subclass', () => {
    function datastore() {
      this.process = function () {
        this.connect()
        this.select()
        this.disconnect()
      }
    }

    function Inherit(Proto) {
      const F = function () {}
      F.prototype = new Proto()
      return new F()
    }

    const withProcess = new Inherit(datastore)

    withProcess.value = 0
    withProcess.stateHistory = []

    withProcess.connect = function () {
      this.stateHistory = [...this.stateHistory, 'connected']
    }
    withProcess.select = function () {
      this.value = 5
      this.stateHistory = [...this.stateHistory, 'selected']
    }
    withProcess.disconnect = function () {
      this.stateHistory = [...this.stateHistory, 'disconnected']
    }

    withProcess.process()

    // console.info('[10]', {
    //   withProcess,
    //   'withProcess.value': withProcess.value,
    //   'this.stateHistory': withProcess.stateHistory,
    // })

    let expected = 5
    expect(withProcess.value).toBe(expected)
    expected = ['connected', 'selected', 'disconnected']
    expect(withProcess.stateHistory).toEqual(expected)
  })
})

// datastore
// process
// connect
// select
// disconnect

// inherit
// proto
// F

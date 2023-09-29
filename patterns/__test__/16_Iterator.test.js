/**
 * @description Pattern: Iterator  Sequentially access the elements of a collection
 * @narrative
      The Iterator Pattern is a behavioral design pattern that provides a way to sequentially access the elements of a collection without exposing the underlying details of its representation. Here are some common use cases for applying the Iterator Pattern:

      Traversal of Collections:

      Scenario: When you need to traverse the elements of a collection in a sequential manner.
      Use Case: The Iterator Pattern is applied to create an iterator object that encapsulates the traversal logic. Clients can use the iterator to iterate over the elements of the collection without knowing its internal structure.
      Aggregation of Objects:

      Scenario: When dealing with collections or aggregates of objects.
      Use Case: The Iterator Pattern is useful for providing a uniform way to iterate over elements in different types of collections (e.g., arrays, lists, trees). It decouples the iteration logic from the specific implementation of the collection.
      Collection Iteration in GUIs:

      Scenario: When developing graphical user interfaces with components that contain collections of elements.
      Use Case: The Iterator Pattern can be applied to iterate over elements in GUI components, allowing UI elements to be displayed or manipulated sequentially without exposing the internal structure of the component.
      File System Traversal:

      Scenario: When traversing the elements in a file system, such as directories and files.
      Use Case: The Iterator Pattern can be used to create iterators for file system objects, enabling clients to traverse directories and files without having to know the details of file system implementation.
      Database Query Results:

      Scenario: When dealing with database query results.
      Use Case: The Iterator Pattern is applied to create iterators for query results, allowing clients to iterate over the result set without needing to understand the specifics of the database query execution.
      Menu Navigation:

      Scenario: When designing menu systems with different options.
      Use Case: The Iterator Pattern can be applied to iterate over menu options, enabling users to navigate through the menu sequentially without exposing the internal structure of the menu.
      Traversal of Graphs or Trees:

      Scenario: When traversing the nodes of a graph or tree data structure.
      Use Case: The Iterator Pattern can be used to create iterators for graph or tree structures, allowing clients to traverse the nodes in a sequential manner without dealing with the complexities of graph or tree traversal algorithms.
      Stream Processing:

      Scenario: When processing streams of data.
      Use Case: The Iterator Pattern can be applied to create iterators for streams, allowing clients to process data elements sequentially as they become available in the stream.
      Aggregate Operations in Functional Programming:

      Scenario: When applying aggregate operations on collections in functional programming.
      Use Case: The Iterator Pattern can be used in functional programming languages to provide a way to perform operations like mapping, filtering, and reducing on collections without exposing the internal representation of the collection.
      Custom Iteration Logic:

      Scenario: When you need to implement custom iteration logic for a specific collection.
      Use Case: The Iterator Pattern allows you to encapsulate custom iteration logic within an iterator object, providing a clean and reusable way to iterate over elements with specific behavior.
      Reversible Iteration:

      Scenario: When you need to support both forward and backward iteration.
      Use Case: The Iterator Pattern can be extended to support reversible iterators, allowing clients to iterate in both directions over a collection.
      Lazy Loading of Collection Elements:

      Scenario: When dealing with large collections and you want to load elements lazily.
      Use Case: The Iterator Pattern can be applied to create iterators that load elements from the collection on demand, providing a mechanism for lazy loading.
      In summary, the Iterator Pattern is valuable when you want to provide a standardized way to traverse the elements of a collection without exposing its internal details. It promotes decoupling between clients and collections, making it easier to change or extend the collection implementation without affecting the clients.
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 16_Iterator.test`
 */

describe('Behavioral Patterns', () => {
  it('--  Pattern: Iterator  Sequentially access the elements of a collection', () => {
    function Iterator(items) {
      this.items = items
    }

    Iterator.prototype = {
      index: 0,
      first: function () {
        this.reset()
        return this.next()
      },
      next() {
        return this.items[this.index++]
      },
      hasNext() {
        return this.index <= this.items.length
      },
      reset() {
        this.index = 0
      },
      each(callback) {
        for (let item = this.first(); this.hasNext(); item = this.next()) {
          callback(item)
        }
      },
    }

    const items = ['one', 2, 'circle', true, 'Applepie']

    let str = ''
    const callback = function (item) {
      str += `-${item}`
    }

    const iterator = new Iterator(items)
    iterator.each(callback)

    expect(str).toBe('-one-2-circle-true-Applepie')
  })
})

// Iterator
// index
// items

// Iterator
// first
// next
// hasNext
// reset
// each

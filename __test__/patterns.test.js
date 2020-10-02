/**
 * @Description Exploring and replicating Programming Design Patterns
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `jest /Users/rcheski/dev/191203_app_create_text/__test__/patterns.test.js`
 */

describe('Creational Patterns', () => {
  it('--  Pattern: Abstract Factory  Creates an instance of several families of classes', () => {
    expect(true).toBe(true)
  })

  it('--  Pattern: Builder  Separates object construction from its representation', () => {
    expect(true).toBe(true)
  })

  it('--  Pattern: Factory Method	Creates an instance of several derived classes', () => {
    expect(true).toBe(true)
  })

  it('--  Pattern: Prototype	A fully initialized instance to be copied or cloned', () => {
    expect(true).toBe(true)
  })

  it('--  Pattern: Singleton	A class of which only a single instance can exist', () => {
    expect(true).toBe(true)
  })
})

describe('Structural Patterns', () => {
  it('-- Pattern: Adapter	Match interfaces of different classes', () => {
    expect(true).toBe(true)
  })

  it('Pattern: Bridge	Separates an object’s interface from its implementation', () => {
    const Screen = function () {
      this.click = () => 'select'
      this.move = () => 'move'
      this.drag = () => 'drag'
      this.zoom = () => 'zoom in'
    }

    const Audio = function () {
      this.click = () => 'oink'
      this.move = () => 'waves'
      this.drag = () => 'screetch'
      this.zoom = () => 'volume up'
    }

    const Gestures = function (device) {
      this.device = device
      this.tap = () => this.device.click()
      this.swipe = () => this.device.move()
      this.pan = () => this.device.drag()
      this.pinch = () => this.device.zoom()
    }

    const Mouse = function (device) {
      this.device = device
      this.click = () => this.device.click()
      this.move = () => this.device.move()
      this.down = () => this.device.drag()
      this.wheel = () => this.device.zoom()
    }

    const screen = new Screen()
    const audio = new Audio()

    const hand = new Gestures(screen)
    const mouse = new Mouse(audio)

    let output = []
    output = [...output, hand.tap()]
    output = [...output, hand.swipe()]
    output = [...output, mouse.move()]
    output = [...output, mouse.wheel()]

    // console.info('Bridge', output)
    const toEqual = ['select', 'move', 'waves', 'volume up']
    expect(output).toEqual(toEqual)
  })

  it('Pattern: Composite	A tree structure of simple and composite objects', () => {
    const Node = function (name) {
      this.children = []
      this.name = name || ''
      // console.info('Node', { children: this.children })
    }
    Node.prototype = {
      add: function (child) {
        const childrenNext = this.children
        this.children = [...childrenNext, child]
      },
      // addBulk: function (childrenNew) {
      //   this.children = [...this.children, ...childrenNew]
      // },
      // remove: function (child) {
      //   const i = this.children.indexOf(child)
      //   const childrenNext = this.children
      //   this.children = [
      //     ...childrenNext.slice(0, i),
      //     ...childrenNext.slice(i + 1),
      //   ]
      //   //  console.info('pattern.remove', { i, children: this.children })
      // },
      // getChild: function (i) {
      //   return this.children[i]
      // },
      // hadChildren: function () {
      //   return this.children.length > 0
      // },
    }

    let tree = {}
    let step = 0
    function run() {
      tree = new Node('root')
      const right = new Node('right')
      const left = new Node('left')
      const rightLeft = new Node('right-left')
      const rightRight = new Node('right-right')
      const leftLeft = new Node('left-left')
      const leftRight = new Node('left-right')
      tree.add(right)
      tree.add(left)
      right.add(rightLeft)
      right.add(rightRight)
      left.add(leftLeft)
      left.add(leftRight)
    }

    run()

    let branches = []
    const callback = function (nodeIn) {
      step += 1
      branches = [...branches, nodeIn.name]
      // console.info(`callback ${step}`, { 'nodeIn.name': nodeIn.name })
    }

    function traverse(nodeIn, callback) {
      callback(nodeIn)

      nodeIn.children.forEach(item => {
        if (item.children) {
          traverse(item, callback)
        }
      })
    }

    traverse(tree, callback)

    console.info('Composite [11]', { tree, step, branches })
    const expected = [
      'root',
      'right',
      'right-left',
      'right-right',
      'left',
      'left-left',
      'left-right',
    ]
    expect(branches).toEqual(expected)
  })

  it('-- Pattern: Decorator  Add responsibilities to objects dynamically', () => {
    expect(true).toBe(true)
  })

  it('-- Pattern: Facade  A single class that represents an entire subsystem', () => {
    expect(true).toBe(true)
  })

  it('-- Pattern: Flyweight  A fine-grained instance used for efficient sharing', () => {
    expect(true).toBe(true)
  })

  it('-- Pattern: Proxy  An object representing another object', () => {
    expect(true).toBe(true)
  })
})

describe('Behavioral Patterns', () => {
  it('Pattern: Chain of Resp.	A way of passing a request between a chain of objects', () => {
    const log = (function () {
      let log = ''
      let res = []
      return {
        add(txt) {
          this.txt = txt || ''
          log += this.txt + '\n'
        },
        res(obj) {
          res = [...res, obj]
        },
        show() {
          console.info('', log)
          log = ''
        },
        ret() {
          return res
        },
      }
    })()

    const Request = function (amount) {
      this.amount = amount
      this.result = []
      log.add(`Total amount to dispense ${amount}`)
    }
    Request.prototype = {
      get(banknote) {
        const number = Math.floor(this.amount / banknote)
        this.amount -= banknote * number
        if (number > 0) {
          log.add(`Dispense ${banknote} x ${number} = ${banknote * number}`)
          log.res({ banknote, number, amount: banknote * number })
        }
        return this
      },
    }

    const request = new Request(348)
    request.get(100).get(50).get(20).get(10).get(5).get(2).get(1)
    // log.show()
    // console.info('info [10]', log.ret())
    const expected = [
      { banknote: 100, number: 3, amount: 300 },
      { banknote: 20, number: 2, amount: 40 },
      { banknote: 5, number: 1, amount: 5 },
      { banknote: 2, number: 1, amount: 2 },
      { banknote: 1, number: 1, amount: 1 },
    ]
    expect(log.ret()).toEqual(expected)
  })

  it('--  Pattern: Command  Encapsulate a command request as an object', () => {
    expect(true).toBe(true)
  })
  it('--  Pattern: Interpreter  A way to include language elements in a program', () => {
    expect(true).toBe(true)
  })

  it('--  Pattern: Iterator  Sequentially access the elements of a collection', () => {
    expect(true).toBe(true)
  })

  it('--  Pattern: Mediator  Defines simplified communication between classes', () => {
    expect(true).toBe(true)
  })

  it("--  Pattern: Memento Capture and restore an object's internal state", () => {
    expect(true).toBe(true)
  })

  it('--  Pattern: Observer  A way of notifying change to a number of classes', () => {
    expect(true).toBe(true)
  })

  it("--  Pattern: State  Alter an object's behavior when its state changes", () => {
    expect(true).toBe(true)
  })

  it('--  Pattern: Strategy  Encapsulates an algorithm inside a class', () => {
    expect(true).toBe(true)
  })

  it('--  Pattern: Template Method  Defer the exact steps of an algorithm to a subclass', () => {
    expect(true).toBe(true)
  })

  it('--  Pattern: Visitor  Defines a new operation to a class without change', () => {
    expect(true).toBe(true)
  })
})

/*
Creational Patterns
  Abstract Factory	Creates an instance of several families of classes
  Builder	Separates object construction from its representation
  Factory Method	Creates an instance of several derived classes
  Prototype	A fully initialized instance to be copied or cloned
  Template Method	Defer the exact steps of an algorithm to a subclass
  Singleton	A class of which only a single instance can exist

Structural Patterns
  Adapter	Match interfaces of different classes
  Bridge	Separates an object’s interface from its implementation
  Composite	A tree structure of simple and composite objects
  Decorator	Add responsibilities to objects dynamically
  Facade	A single class that represents an entire subsystem
  Flyweight	A fine-grained instance used for efficient sharing
  Proxy	An object representing another object

Behavioral Patterns
  Chain of Resp.	A way of passing a request between a chain of objects
  Command	Encapsulate a command request as an object
  Interpreter	A way to include language elements in a program
  Iterator	Sequentially access the elements of a collection
  Mediator	Defines simplified communication between classes
  Memento	Capture and restore an object's internal state
  Observer	A way of notifying change to a number of classes
  State	Alter an object's behavior when its state changes
  Strategy	Encapsulates an algorithm inside a class
  Visitor	Defines a new operation to a class without change
  */

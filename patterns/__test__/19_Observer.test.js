/**
 * @description The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript.
 * @link https://www.dofactory.com/javascript/design-patterns/observer
 * @test yarn jest patterns/__test__/19_Observer.test.js
 */

// Click
// handlers

// Click
// subscribe
// fn
// unsubscribe
// handlers

// fire
// o, thisObj
// scope
// handlers

describe('Behavioral Patterns', () => {
  it('--  2023-09-25 Pattern: Observer  A way of notifying change to a number of functions with args', () => {
    const GetClicked = function () {
      this.handlers = []

      this.subscribe = func => {
        if (this.handlers.find(handler => handler === func)) return
        this.handlers = [...this.handlers, func]
      }

      this.unsubscribe = func => {
        this.handlers = this.handlers.filter(handler => handler !== func)
      }

      this.fire = params => {
        this.handlers.forEach(handler => handler(params))
      }
    }

    const EventLog = function () {
      this.log = []

      this.setLog = num => {
        this.log = [...this.log, num]
      }

      this.getLog = () => this.log
    }

    const eventLog = new EventLog()
    const fn = eventLog.setLog

    const click = new GetClicked()

    click.subscribe(fn)
    click.fire(1)
    click.fire(2)
    click.unsubscribe(fn)
    click.fire(3)
    click.fire(4)
    click.subscribe(fn)
    click.subscribe(fn)
    click.fire(5)
    click.fire(6)

    const log = eventLog.getLog()
    // console.info('eventLog [67]', { log, eventLog })

    const expected = [1, 2, 5, 6]
    expect(log).toEqual(expected)
  })

  it('--  2020-12-26 Pattern: Observer  A way of notifying change to a number of classes', () => {
    class Click {
      handlers = []

      subscribe(func) {
        this.handlers = [...this.handlers, func]
      }
      unsubscribe(func) {
        this.handlers = this.handlers.filter(item => item !== func)
      }

      fire(num, thisObj) {
        const self = thisObj || window
        this.handlers.forEach(item => {
          item.call(self, num)
        })
      }
    }

    const EventLog = function () {
      this.log = []

      this.setLog = num => {
        this.log = [...this.log, num]
      }

      this.getLog = () => this.log
    }

    const eventLog = new EventLog()
    const fn = eventLog.setLog

    const click = new Click()

    click.subscribe(fn)
    click.fire(1)
    click.fire(2)
    click.unsubscribe(fn)
    click.fire(3)
    click.fire(4)
    click.subscribe(fn)
    click.fire(5)
    click.fire(6)

    const log = eventLog.getLog()
    // console.info('eventLog', { eventLog })

    const expected = [1, 2, 5, 6]
    expect(log).toEqual(expected)
  })

  it('--  2020-11-01 Pattern: Observer  A way of notifying change to a number of classes', () => {
    function Click() {
      this.handlers = []
    }

    Click.prototype = {
      subscribe(fn) {
        this.handlers = [...this.handlers, fn]
      },
      unsubscribe(fn) {
        this.handlers = this.handlers.filter(item => item !== fn)
      },
      fire(num, thisObj) {
        const self = thisObj || window
        this.handlers.forEach(item => {
          item.call(self, num)
        })
      },
    }

    let eventLog = []
    function fn(n) {
      eventLog = [...eventLog, n]
    }

    const click = new Click()

    click.subscribe(fn)
    click.fire(1)
    click.fire(2)
    click.unsubscribe(fn)
    click.fire(3)
    click.fire(4)
    click.subscribe(fn)
    click.fire(5)
    click.fire(6)

    // console.info('eventLog', { eventLog })

    const expected = [1, 2, 5, 6]
    expect(eventLog).toEqual(expected)
  })
})

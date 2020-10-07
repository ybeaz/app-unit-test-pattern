describe('Behavioral Patterns', () => {
  it('--  Pattern: Observer  A way of notifying change to a number of classes', () => {
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
      fire(o, thisObj) {
        const self = thisObj || window
        this.handlers.forEach(item => {
          item.call(self, o)
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

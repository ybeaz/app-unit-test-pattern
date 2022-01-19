/**
 * @Description ...
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest fileName.test`
 */

describe('Behavioral Patterns', () => {
  it('--  Pattern: Template Method  Defer the exact steps of an algorithm to a subclass', () => {
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

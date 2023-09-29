/**
 * @description Pattern: The State pattern provides state-specific logic to a limited set of objects
 *              in which each object represents a particular state.
 * @narrative
 * @link https://www.dofactory.com/javascript/design-patterns/state
 * @command to run `yarn jest 20_State.test`
 */

describe('Behavioral Patterns', () => {
  it('-- Pattern: State with getters, setters, fungs example, as I rememeber it, 2022-01-19', () => {
    const GetterSetterFung = function () {
      let fungs = { isFungs: false, numberFungs: 0 }

      this.getStatus = function () {
        return fungs
      }

      this.setStatus = function (numberFungs) {
        fungs = { isFungs: true, numberFungs }
        if (typeof numberFungs !== 'number' || numberFungs <= 0) {
          fungs = { isFungs: false, numberFungs: 0 }
        }
        return fungs
      }
    }

    const input = [0, 10, 12, 0]

    const getterSetterFungInstance = new GetterSetterFung()

    const output = input.map(item => {
      getterSetterFungInstance.setStatus(item)
      return getterSetterFungInstance.getStatus()
    })

    const expected = [
      { isFungs: false, numberFungs: 0 },
      { isFungs: true, numberFungs: 10 },
      { isFungs: true, numberFungs: 12 },
      { isFungs: false, numberFungs: 0 },
    ]

    // console.info('24_GetterSetter.test [41]', { output })

    expect(output).toEqual(expected)
  })

  // TrafficLight
  // CreateStore
  // count
  // currentState
  // change
  // start

  // Red
  // Yellow
  // Green
  // light
  // go

  it("-- Pattern: State  Alter an object's behavior when its state changes, 2021-12-26", () => {
    class CreateStore {
      constructor(props) {
        this.state = [props]
      }

      state = []

      dispatch(lightObj) {
        this.state = [...this.state, lightObj]
      }

      getState() {
        return this.state.slice(-1)[0]
      }

      getStateHistory() {
        return this.state
      }
    }

    const store = new CreateStore({ light: 'red' })

    store.dispatch({ light: 'yellow' })

    store.dispatch({ light: 'green' })

    // console.info('state 2', {
    //   stateHistory: store.getStateHistory(),
    //   getState: store.getState(),
    // })

    const expectStateHistory = [
      { light: 'red' },
      { light: 'yellow' },
      { light: 'green' },
    ]
    const expectState = { light: 'green' }
    expect(store.getStateHistory()).toEqual(expectStateHistory)
    expect(store.getState()).toEqual(expectState)
  })

  it("--  2020=11-01 Pattern: State  Alter an object's behavior when its state changes", () => {
    function CreateStore(initialState) {
      this.state = [initialState]
    }

    CreateStore.prototype = {
      dispatch(state) {
        this.state = [...this.state, state]
      },
      getState() {
        return this.state.length > 0 ? this.state[this.state.length - 1] : {}
      },
      getStateHistory() {
        return this.state
      },
    }

    const store = new CreateStore({ light: 'red' })

    store.dispatch({ light: 'yellow' })
    store.dispatch({ light: 'green' })

    // console.info('state', {
    //   stateHistory: store.getStateHistory(),
    //   getState: store.getState(),
    // })

    const expectStateHistory = [
      { light: 'red' },
      { light: 'yellow' },
      { light: 'green' },
    ]
    const expectState = { light: 'green' }
    expect(store.getStateHistory()).toEqual(expectStateHistory)
    expect(store.getState()).toEqual(expectState)
  })
})

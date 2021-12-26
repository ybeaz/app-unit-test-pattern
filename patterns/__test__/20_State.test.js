/**
 * @description The State pattern provides state-specific logic to a limited set of objects in which each object represents a particular state.
 * @link https://www.dofactory.com/javascript/design-patterns/state
 * @test yarn jest patterns/__test__/20_State.test.js
 */

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

describe('Behavioral Patterns', () => {
  it("--  2020=12-26 Pattern: State  Alter an object's behavior when its state changes", () => {
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

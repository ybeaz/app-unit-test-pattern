describe('Behavioral Patterns', () => {
  it("--  Pattern: State  Alter an object's behavior when its state changes", () => {
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

// TrafficLight
// count
// currentState
// change
// start

// Red
// Yellow
// Green
// light
// go

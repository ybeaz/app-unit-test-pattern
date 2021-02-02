import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../DataLayer/actions'
import { ToDoListClass } from './ToDoListClass.react'
import './ToDoBasicReduxClass.css'

class ToDoBasicReduxClassToConnect extends React.Component {
  state = { inputVal: '' }

  handleEvent = (e, action) => {
    const { type } = action
    const { dispatchingEvent } = this.props
    switch (type) {
      case 'CLEAR_TODO_CLASS':
        dispatchingEvent(actions.CLEAR_TODO_CLASS())
        this.setState({ inputVal: '' })
        break
      case 'ADD_TODO_CLASS':
        // console.info('[18] ', { type, state: this.state, props: this.props })
        dispatchingEvent(actions.ADD_TODO_CLASS(this.state.inputVal))
        this.setState({ inputVal: '' })
        break
      case 'INPUT_VALUE':
        this.setState({ inputVal: e.target.value })
        break
      default:
        console.info('Unexpected event')
    }
  }

  render() {
    // console.info('ToDoBasicReduxClass [30]', {
    //   state: this.state,
    //   props: this.props,
    // })
    return (
      <div className='ToDoBasicReduxClass'>
        <p>ToDoBasicReduxClass.react.js</p>
        <ol className='ToDoBasicReduxClass__features_list'>
          <li>Redux store, actions, reducer, Provider</li>
          <li>Connect to Redux store</li>
          <li>mapStateToProps</li>
          <li>mapDispatchToProps</li>
          <li>dispatch > dispatchingEvent</li>
        </ol>
        <div>
          <input
            onChange={e => this.handleEvent(e, { type: 'INPUT_VALUE' })}
            value={this.state.inputVal}
          />
          <button
            onClick={e => this.handleEvent(e, { type: 'ADD_TODO_CLASS' })}
          >
            Add
          </button>
          <button
            onClick={e => this.handleEvent(e, { type: 'CLEAR_TODO_CLASS' })}
          >
            Clear
          </button>
        </div>
        <div>
          <ToDoListClass />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchingEvent: action => dispatch(action),
  }
}

export const ToDoBasicReduxClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoBasicReduxClassToConnect)

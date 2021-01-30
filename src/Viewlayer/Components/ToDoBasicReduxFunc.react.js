import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as actions from '../../DataLayer/actions'
import { ToDoListFunc } from './ToDoListFunc.react'
import './ToDoBasicReduxFunc.css'

export const ToDoBasicReduxFunc = () => {
  const [inputVal, setInputVal] = useState('')
  const dispatch = useDispatch()
  const store = useSelector(store => store)

  const handleEvent = (e, action) => {
    const { type } = action
    switch (type) {
      case 'CLEAR_TODO_FUNC':
        dispatch(actions.CLEAR_TODO_FUNC())
        setInputVal('')
        break
      case 'ADD_TODO_FUNC':
        dispatch(actions.ADD_TODO_FUNC(inputVal))
        setInputVal('')
        // console.info('[20]', { data: inputVal })
        break
      case 'INPUT_VALUE':
        setInputVal(e.target.value)
        break
      default:
        console.info('Unexpected event')
    }
  }

  return (
    <div className='ToDoBasicReduxFunc'>
      <p>ToDoBasicReduxFunc.react.js</p>
      <div>
        <input
          onChange={e => handleEvent(e, { type: 'INPUT_VALUE' })}
          value={inputVal}
        />
        <button onClick={e => handleEvent(e, { type: 'ADD_TODO_FUNC' })}>
          Add
        </button>
        <button onClick={e => handleEvent(e, { type: 'CLEAR_TODO_FUNC' })}>
          Clear
        </button>
      </div>
      <div>
        <ToDoListFunc />
      </div>
    </div>
  )
}

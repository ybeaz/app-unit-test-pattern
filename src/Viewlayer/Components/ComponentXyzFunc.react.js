import React, { useState, useEffect } from 'react'

import { Header } from '../Components/Header.react'
import * as serviceFunc from '../../Shared/serviceFunc'
import './ComponentXyzFunc.css'
//  import * as mockdata from '../../__mock__/mockData.json'

export const ComponentXyzFunc = props => {
  const [inputArr, setInputArr] = useState([])
  const [inputCurrent, setInputCurrent] = useState('')

  const handleEvents = (e, action) => {
    switch (action.type) {
      case 'clear':
        setInputArr([])
        setInputCurrent('')
        break
      case 'onClickButton':
        setInputArr([...inputArr, inputCurrent])
        setInputCurrent('')
        break
      case 'inputNewVal':
        setInputCurrent(action.value)
        // console.info('ComponentXyzFunc->handleActions [0]', action.type, { val: action.value })
        break
      default: {
        console.info(
          'ComponentXyzFunc->handleActions [10] Unexpected action type',
          action.type
        )
      }
    }
  }

  const maxValue = serviceFunc.utilMaxValue(inputArr)
  // console.info('ComponentXyzFunc', { maxValue, inputArr, inputCurrent })

  return (
    <div className='ComponentXyzFunc'>
      <div>
        <p>ComponentXyzFunc.react.js</p>
        <div className='ComponentXyzFunc__inputButtonWrap'>
          <input
            className='ComponentXyzFunc__input'
            onChange={e =>
              handleEvents(e, { type: 'inputNewVal', value: e.target.value })
            }
            value={inputCurrent}
          />
          <button
            className='ComponentXyzFunc__button'
            onClick={e => handleEvents(e, { type: 'onClickButton' })}
          >
            Ok
          </button>
          <button
            className='ComponentXyzFunc__button'
            onClick={e => handleEvents(e, { type: 'clear' })}
          >
            Clear
          </button>
        </div>
        <p>{inputArr.join(', ')}</p>
        <p>{maxValue}</p>
      </div>
    </div>
  )
}

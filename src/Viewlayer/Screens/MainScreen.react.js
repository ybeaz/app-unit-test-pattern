import React, { useState } from 'react'

import { Header } from '../Components/Header.react'
import * as serviceFunc from '../../Shared/serviceFunc'
import './MainScreen.css'


export const MainScreen = props => {

    const [inputArr, setInputArr] = useState([])
    const [inputCurrent, setInputCurrent] = useState('')

    const handleEvents = (e, action) => {

        switch(action.type){
            case 'onClickButton':
                setInputArr([...inputArr, inputCurrent])
                setInputCurrent('')
            break
            case 'inputNewVal':
                setInputCurrent(action.value)
                // console.info('MainScreen->handleActions [0]', action.type, { val: action.value })
            break
            default: {
                console.info('MainScreen->handleActions [10] Unexpected action type', action.type)
            }
        }
    }

    const maxValue = serviceFunc.utilMaxValue(inputArr)
    // console.info('MainScreen', { maxValue, inputArr, inputCurrent })

    return <div className='MainScreen'>
        <Header />
        <div>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <div className='MainScreen__inputButtonWrap'>
                <input
                    className='MainScreen__input' 
                    onChange={e => handleEvents(e, {type: 'inputNewVal', value: e.target.value})}
                    value={inputCurrent}
                />
                <button
                    className='MainScreen__button'
                    onClick={e => handleEvents(e, {type: 'onClickButton'})}
                >
                    Ok
                </button>
            </div>
            <p>{inputArr.join(', ')}</p>
            <p>{maxValue}</p>
        </div>
    </div>
} 
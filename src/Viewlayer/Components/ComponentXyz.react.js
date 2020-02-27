import React, { useState } from 'react'

import { Header } from '../Components/Header.react'
import * as serviceFunc from '../../Shared/serviceFunc'
import './ComponentXyz.css'


export const ComponentXyz = props => {

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
                // console.info('ComponentXyz->handleActions [0]', action.type, { val: action.value })
            break
            default: {
                console.info('ComponentXyz->handleActions [10] Unexpected action type', action.type)
            }
        }
    }

    const maxValue = serviceFunc.utilMaxValue(inputArr)
    // console.info('ComponentXyz', { maxValue, inputArr, inputCurrent })

    return <div className='ComponentXyz'>
        <Header />
        <div>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <div className='ComponentXyz__inputButtonWrap'>
                <input
                    className='ComponentXyz__input' 
                    onChange={e => handleEvents(e, {type: 'inputNewVal', value: e.target.value})}
                    value={inputCurrent}
                />
                <button
                    className='ComponentXyz__button'
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
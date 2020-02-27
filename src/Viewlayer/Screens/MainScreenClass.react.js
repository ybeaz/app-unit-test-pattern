import React from 'react'

import * as serviceFunc from '../../Shared/serviceFunc'
import './MainScreen.css'


export class MainScreenClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputArr: [],
            inputCurrent: '',
        }
    }

    handleEvents = (action) => {

        switch(action.type){
            case 'onClickButton':
                const { isPermission } = this.getMainScreenButtonPermission(this.state.inputCurrent)
                if (isPermission === false) return
                this.setState({
                    inputArr: [...this.state.inputArr, this.state.inputCurrent],
                    inputCurrent: '',
                })
                return this.state.inputArr
            break
            case 'inputNewVal':
                this.setState({
                    inputCurrent: action.value,
                })
                return action.value
                // console.info('MainScreen->handleActions [0]', action.type, { val: action.value })
            break
            default: {
                console.info('MainScreen->handleActions [10] Unexpected action type', action.type)
            }
        }
    }   

    getMainScreenButtonPermission = inputCurrent => {
        let output = {
            className: 'MainScreen__button MainScreen__button_NaN',
            isPermission: false,
        }
        if (!isNaN(inputCurrent)) {
            output = {
                className: 'MainScreen__button',
                isPermission: true,
            }
        }
        return output
    }


    render () {
        const mainScreenButtonClass = this.getMainScreenButtonPermission(this.state.inputCurrent).className

        return <div className='MainScreen'>
            <div>
                <p>
                    MainScreenClass.react.js
                </p>
                <div className='MainScreen__inputButtonWrap'>
                    <input
                        className='MainScreen__input' 
                        onChange={e => this.handleEvents({type: 'inputNewVal', value: e.target.value})}
                        value={this.state.inputCurrent}
                    />
                    <button
                        className={mainScreenButtonClass}
                        onClick={e => this.handleEvents({type: 'onClickButton'})}
                    >
                        Ok
                    </button>
                </div>
                <p>{this.state.inputArr.length > 0 && this.state.inputArr.join(', ')}</p>
                <p>{serviceFunc.utilMaxValue(this.state.inputArr)}</p>
            </div>
        </div>
    }

}

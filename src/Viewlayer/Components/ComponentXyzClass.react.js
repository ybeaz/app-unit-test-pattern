import React from 'react'

import * as serviceFunc from '../../Shared/serviceFunc'
import './ComponentXyz.css'


export class ComponentXyzClass extends React.Component {

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
                const { isPermission } = this.getComponentXyzButtonPermission(this.state.inputCurrent)
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
                // console.info('ComponentXyz->handleActions [0]', action.type, { val: action.value })
            break
            default: {
                console.info('ComponentXyz->handleActions [10] Unexpected action type', action.type)
            }
        }
    }   

    getComponentXyzButtonPermission = inputCurrent => {
        let output = {
            className: 'ComponentXyz__button ComponentXyz__button_NaN',
            isPermission: false,
        }
        if (!isNaN(inputCurrent)) {
            output = {
                className: 'ComponentXyz__button',
                isPermission: true,
            }
        }
        return output
    }


    render () {
        const ComponentXyzButtonClass = this.getComponentXyzButtonPermission(this.state.inputCurrent).className

        return <div className='ComponentXyz'>
            <div>
                <p>
                    ComponentXyzClass.react.js
                </p>
                <div className='ComponentXyz__inputButtonWrap'>
                    <input
                        className='ComponentXyz__input' 
                        onChange={e => this.handleEvents({type: 'inputNewVal', value: e.target.value})}
                        value={this.state.inputCurrent}
                    />
                    <button
                        className={ComponentXyzButtonClass}
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

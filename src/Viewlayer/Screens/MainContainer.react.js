import React from 'react'

import { Header } from '../Components/Header.react'
import { ComponentXyzClass } from '../Components/ComponentXyzClass.react'
import './MainContainer.css'


export class MainContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    handleEvents = (action) => {

        switch(action.type){
            case 'onClickButton':
                const { isPermission } = this.getMainContainerButtonPermission(this.state.inputCurrent)
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
                // console.info('MainContainer->handleActions [0]', action.type, { val: action.value })
            break
            default: {
                console.info('MainContainer->handleActions [10] Unexpected action type', action.type)
            }
        }
    }   

    render () {

        return <div className='MainContainer'>
            <Header />
            <div className='MainContainer__body'>
                <div className='MainContainer__body'>MainContainer.react.js</div>
                <ComponentXyzClass />
            </div>
        </div>
    }

}

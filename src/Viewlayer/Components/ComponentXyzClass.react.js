import React from 'react'

import * as serviceFunc from '../../Shared/serviceFunc'
import './ComponentXyzClass.css'

export class ComponentXyzClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputArr: [],
      inputCurrent: '',
    }
  }

  handleEvents = action => {
    switch (action.type) {
      case 'clear':
        this.setState({ inputArr: [], inputCurrent: '' })
        break
      case 'onClickButton':
        const { isPermission } = this.getComponentXyzButtonPermission(
          this.state.inputCurrent
        )
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
        // console.info('Func->handleActions [0]', action.type, { val: action.value })
        break
      default: {
        console.info(
          'ComponentXyz->handleActions [10] Unexpected action type',
          action.type
        )
      }
    }
  }

  getComponentXyzButtonPermission = inputCurrent => {
    let output = {
      className: 'ComponentXyzClass__button ComponentXyzClass__button_NaN',
      isPermission: false,
    }
    if (!isNaN(inputCurrent)) {
      output = {
        className: 'ComponentXyzClass__button',
        isPermission: true,
      }
    }
    return output
  }

  render() {
    const ComponentXyzButtonClass = this.getComponentXyzButtonPermission(
      this.state.inputCurrent
    ).className

    return (
      <div className='ComponentXyzClass'>
        <div>
          <p>ComponentXyzClass.react.js</p>
          <div className='ComponentXyzClass__inputButtonWrap'>
            <input
              className='ComponentXyzClass__input'
              onChange={e =>
                this.handleEvents({
                  type: 'inputNewVal',
                  value: e.target.value,
                })
              }
              value={this.state.inputCurrent}
            />
            <button
              className={ComponentXyzButtonClass}
              onClick={e => this.handleEvents({ type: 'onClickButton' })}
            >
              Ok
            </button>
            <button
              className={ComponentXyzButtonClass}
              onClick={e => this.handleEvents({ type: 'clear' })}
            >
              Clear
            </button>
          </div>
          <p>
            {this.state.inputArr.length > 0 && this.state.inputArr.join(', ')}
          </p>
          <p>{serviceFunc.utilMaxValue(this.state.inputArr)}</p>
        </div>
      </div>
    )
  }
}

import React from 'react'
import ReactDOM from 'react-dom'
import enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ComponentXyzClass } from './ComponentXyzClass.react'
import * as serviceFunc from '../../Shared/serviceFunc'

enzyme.configure({ adapter: new Adapter() })

describe('ComponentXyzClass', () => {
  it('09. should render correct html in response to the state', () => {
    const wrapper = mount(<ComponentXyzClass />)

    wrapper.setState({ inputArr: [], inputCurrent: 'foo' })
    expect(wrapper.find('.ComponentXyzClass__button_NaN')).toHaveLength(2)
    let model =
      '<button class="ComponentXyzClass__button ComponentXyzClass__button_NaN">Ok</button>'
    expect(wrapper.find('.ComponentXyzClass__button').first().html()).toEqual(
      model
    )

    wrapper.setState({ inputArr: [], inputCurrent: '123' })
    expect(wrapper.find('.ComponentXyzClass__button_NaN')).toHaveLength(0)
    model = '<button class="ComponentXyzClass__button">Ok</button>'
    expect(wrapper.find('.ComponentXyzClass__button').first().html()).toEqual(
      model
    )
  })

  it('08. should call class method and change state approprietly', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<ComponentXyzClass />)
    const outputInputNewVal = wrapper
      .instance()
      .handleEvents({ type: 'inputNewVal', value: 7 })
    let state = wrapper.instance().state

    expect(outputInputNewVal).toEqual(7)
    expect(state.inputCurrent).toEqual(7)

    const outputOnClickButton = wrapper
      .instance()
      .handleEvents({ type: 'onClickButton', value: 7 })
    state = wrapper.instance().state

    expect(state.inputCurrent).toEqual('')
    expect(state.inputArr).toEqual([7])
    expect(outputOnClickButton).toEqual([7])
  })

  it('07. should call onClick and change state approprietly', () => {
    const wrapper = shallow(<ComponentXyzClass />)
    wrapper.setState({ inputArr: ['5'], inputCurrent: '7' })
    const event = {
      target: {},
    }
    wrapper.find('.ComponentXyzClass__button').first().simulate('click', event)
    const model = { inputArr: ['5', '7'], inputCurrent: '' }
    expect(wrapper.state()).toEqual(model)
  })

  it('06. should call onChange and change state approprietly', () => {
    const wrapper = shallow(<ComponentXyzClass />)
    const event = {
      target: { value: 7 },
    }
    wrapper.find('.ComponentXyzClass__input').simulate('change', event)

    const model = { inputArr: [], inputCurrent: 7 }
    expect(wrapper.state()).toEqual(model)
  })

  it('05. should respond on onChange event and pass the right args to the mock function', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<ComponentXyzClass />)
    wrapper.instance().handleEvents = mockFn
    const event = {
      target: { value: 7 },
    }
    wrapper.find('.ComponentXyzClass__input').simulate('change', event)
    expect(mockFn.mock.calls[0][0]).toEqual({ type: 'inputNewVal', value: 7 })
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('04. should respond on onClick event', () => {
    const wrapper = shallow(<ComponentXyzClass />)
    const mockFn = jest.fn()
    const ComponentXyzButton = wrapper
      .find('.ComponentXyzClass__button')
      .first()
    ComponentXyzButton.simulate('click', mockFn())
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalled()
  })

  it('03. should return the correct values from a function call', () => {
    let output = serviceFunc.utilMaxValue([3, 6, 9, 3, 4])
    expect(output).toEqual(9)
    output = serviceFunc.utilMaxValue(['foo', 24, '2 3', 5])
    expect(output).toEqual(24)
  })

  it('02. should match snapshot in "debug" mode', () => {
    const component = shallow(<ComponentXyzClass debug />)
    expect(component).toMatchSnapshot()
  })

  it('01. should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ComponentXyzClass />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

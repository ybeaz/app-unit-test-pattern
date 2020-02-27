import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { MainScreenClass } from './MainScreenClass.react';
import * as serviceFunc from '../../Shared/serviceFunc'

describe('MainScreenClass', () => {

  it('09. should component render right html in response to the state', () => {
    const wrapper =  mount(<MainScreenClass />)
    
    wrapper.setState({ inputArr: [], inputCurrent: 'foo'})
    expect(wrapper.find('.MainScreen__button_NaN')).toHaveLength(1)
    let model = '<button class="MainScreen__button MainScreen__button_NaN">Ok</button>'
    expect(wrapper.find('.MainScreen__button').html()).toEqual(model)

    wrapper.setState({ inputArr: [], inputCurrent: '123'})
    expect(wrapper.find('.MainScreen__button_NaN')).toHaveLength(0)
    model = '<button class="MainScreen__button">Ok</button>'
    expect(wrapper.find('.MainScreen__button').html()).toEqual(model)
  });

  it('08. should call method and change state', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<MainScreenClass />)
    const outputInputNewVal = wrapper.instance().handleEvents({ type: 'inputNewVal', value: 7 })
    let state = wrapper.instance().state

    expect(outputInputNewVal).toEqual(7)
    expect(state.inputCurrent).toEqual(7)

    const outputOnClickButton = wrapper.instance().handleEvents({ type: 'onClickButton', value: 7 })
    state = wrapper.instance().state

    expect(state.inputCurrent).toEqual('')
    expect(state.inputArr).toEqual([7])
    expect(outputOnClickButton).toEqual([7])
  });

  it('07. should call onClick and see the real state', () => {
    const wrapper = shallow(<MainScreenClass />)
    wrapper.setState({ inputArr: ['5'], inputCurrent: '7'})
    const event = {
      target: { }
    }
    wrapper.find('.MainScreen__button').simulate('click', event)
    const model = { inputArr: ['5', '7'], inputCurrent: '' }
    expect(wrapper.state()).toEqual(model)
  });

  it('06. should call onChange and see the real state', () => {
    const wrapper = shallow(<MainScreenClass />)
    const event = {
      target: { value: 7 }
    }
    wrapper.find('.MainScreen__input').simulate('change', event)

    const model = { inputArr: [], inputCurrent: 7 }
    expect(wrapper.state()).toEqual(model)
  });

  it('05. should call onChange and see if it trigger a mock function', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<MainScreenClass />)
    wrapper.instance().handleEvents = mockFn
    const event = {
      target: { value: 7 }
    }
    wrapper.find('.MainScreen__input').simulate('change', event)
    expect(mockFn.mock.calls[0][0]).toEqual({ type: 'inputNewVal', value: 7 })
    expect(mockFn).toHaveBeenCalledTimes(1)
  });

  it('04. should respond on onClick', () => {
    const wrapper = shallow(<MainScreenClass />)
    const mockFn = jest.fn()
    const mainScreenButton = wrapper.find('.MainScreen__button')
    mainScreenButton.simulate('click', mockFn())
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalled()
  });

  it('03. should serviceFunc.utilMaxValue return correct values', () => {
    let output = serviceFunc.utilMaxValue([3,6,9,3,4])
    expect(output).toEqual(9)
    output = serviceFunc.utilMaxValue(['foo', 24, '2 3', 5])
    expect(output).toEqual(24)
  });

  it('02. should match snapshot in "debug" mode', () => {
    const component = shallow(<MainScreenClass debug />);
    expect(component).toMatchSnapshot();
  });

  it('01. renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainScreenClass />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
})

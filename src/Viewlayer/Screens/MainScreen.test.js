import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { MainScreen } from './MainScreen.react';
import * as serviceFunc from '../../Shared/serviceFunc'

jest.mock('../../Shared/serviceFunc')

describe('MainScreen', () => {

  it('should input have a value', () => {
    const wrapperMount = mount(<MainScreen />);
    const mockFn = jest.fn()
    const mainScreenInput = wrapperMount.find('.MainScreen__input')
    mainScreenInput.props().value = 'Hello value'
    expect(mainScreenInput.props().value).toBe('Hello value')
  });

  it('should respond on onClick', () => {
    const wrapper = shallow(<MainScreen />)
    const mockFn = jest.fn()
    const mainScreenButton = wrapper.find('.MainScreen__button')
    mainScreenButton.simulate('click', mockFn())
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalled()
  });

  it('should serviceFunc.utilMaxValue called', () => {
    const component = shallow(<MainScreen debug />);
    expect(serviceFunc.utilMaxValue).toHaveReturned()
    expect(serviceFunc.utilMaxValue).toHaveBeenCalledWith([])
    expect(serviceFunc.utilMaxValue).toBeCalled();
  });

  it('should match snapshot in "debug" mode', () => {
    const component = shallow(<MainScreen debug />);
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainScreen />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
})

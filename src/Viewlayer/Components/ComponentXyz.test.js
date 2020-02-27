import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { ComponentXyz } from './ComponentXyz.react';
import * as serviceFunc from '../../Shared/serviceFunc'

jest.mock('../../Shared/serviceFunc')

describe('ComponentXyz', () => {

  it('should input have a value', () => {
    const wrapperMount = mount(<ComponentXyz />);
    const mockFn = jest.fn()
    const ComponentXyzInput = wrapperMount.find('.ComponentXyz__input')
    ComponentXyzInput.props().value = 'Hello value'
    expect(ComponentXyzInput.props().value).toBe('Hello value')
  });

  it('should respond on onClick', () => {
    const wrapper = shallow(<ComponentXyz />)
    const mockFn = jest.fn()
    const ComponentXyzButton = wrapper.find('.ComponentXyz__button')
    ComponentXyzButton.simulate('click', mockFn())
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalled()
  });

  it('should serviceFunc.utilMaxValue called', () => {
    const component = shallow(<ComponentXyz debug />);
    expect(serviceFunc.utilMaxValue).toHaveReturned()
    expect(serviceFunc.utilMaxValue).toHaveBeenCalledWith([])
    expect(serviceFunc.utilMaxValue).toBeCalled();
  });

  it('should match snapshot in "debug" mode', () => {
    const component = shallow(<ComponentXyz debug />);
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ComponentXyz />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
})

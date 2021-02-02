import React from 'react'
import { Provider } from 'react-redux'

import { store } from '../../DataLayer/store'
import { Header } from '../Components/Header.react'
import { ComponentXyzFunc } from '../Components/ComponentXyzFunc.react'
import { ComponentXyzClass } from '../Components/ComponentXyzClass.react'
import { ButtonFetchFunc } from '../Components/ButtonFetchListFunc.react'
import { ButtonFetchClass } from '../Components/ButtonFetchListClass.react'
import { ToDoBasicReduxFunc } from '../Components/ToDoBasicReduxFunc.react'
import { ToDoBasicReduxClass } from '../Components/ToDoBasicReduxClass.react'
import { ErrorBoundaryClass } from '../Components/ErrorBoundaryClass.react'
import './MainScreenClass.css'

export class MainScreenClass extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='MainScreenClass'>
        <Header />
        <div className='MainScreenClass__block'>
          <div>MainScreenClass.react.js</div>
          <div>
            <div className='MainScreenClass__row'>
              <div className='MainScreenClass__block'>
                <Provider store={store}>
                  <ToDoBasicReduxFunc />
                </Provider>
              </div>
              <div className='MainScreenClass__block'>
                <Provider store={store}>
                  <ToDoBasicReduxClass />
                </Provider>
              </div>
            </div>
            <div className='MainScreenClass__row'>
              <div className='MainScreenClass__block'>
                <ButtonFetchFunc />
              </div>
              <div className='MainScreenClass__block'>
                <ErrorBoundaryClass>
                  <ButtonFetchClass />
                </ErrorBoundaryClass>
              </div>
            </div>
            <div className='MainScreenClass__row'>
              <div className='MainScreenClass__block'>
                <ComponentXyzFunc />
              </div>
              <div className='MainScreenClass__block'>
                <ComponentXyzClass />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

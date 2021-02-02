import React, { useState, useEffect } from 'react'

import { ButtonFetchUlClass } from './ButtonFetchListUlClass.react'
import './ButtonFetchListClass.css'

export class ButtonFetchClass extends React.Component {
  state = {
    isFetching: false,
    fetchedData: [],
    isDisplaying: false,
  }

  // EXAMPLE. shouldComponentUpdate(...) usage. It is unnecessary here and is used as an example
  shouldComponentUpdate(nextProps, nextState) {
    if (
      JSON.stringify(nextState.fetchedData) ==
      JSON.stringify(this.state.fetchedData)
    ) {
      return true
    }
    return false
  }

  componentDidUpdate() {
    const { isFetching, fetchedData } = this.state
    if (isFetching && fetchedData.length === 0) {
      fetch('./src/__mock__/mockData.json')
        .then(res => res.json())
        .then(data => {
          // EXAMPLE. Pass func to this.setState(). It is unnecessary here and is used as an example
          this.setState((prevState, props) => ({
            isDisplaying: true,
            fetchedData: data,
          }))
          // EXAMPLE. this.forceUpdate() usage. It is unnecessary here and is used as an example
          this.forceUpdate()
        })
    }
  }

  handleEvent = action => {
    const { type } = action
    switch (type) {
      case 'FETCH':
        this.setState({ isFetching: true, isDisplaying: true })
        break
      case 'CLEAR':
        this.setState({ isDisplaying: false })
        break
      default:
        break
    }
  }

  getList = (fetchedData, isDisplaying) => {
    let list = null
    if (isDisplaying) {
      list = fetchedData.map((item, i) => {
        const { id, name } = item
        return <li key={`key-${i}`}>{`id ${id} name ${name}`}</li>
      })
    }
    // console.info('[44]', { list })
    return list
  }

  render() {
    // console.info('[31]', { isFetching, fetchedData, isDisplaying })
    const { isDisplaying, fetchedData } = this.state
    const className = 'ButtonFetchListClass__ul'
    const buttonFetchUlClassProps = { className }
    return (
      <div className='ButtonFetchListClass'>
        {React.createElement('p', null, 'ButtonFetchListClass.react.js')}
        <ol className='ButtonFetchListClass__features_list'>
          <li>ErrorBoundaryClass</li>
          <li>shouldComponentUpdate(nextProps, nextState)</li>
          <li>this.forceUpdate()</li>
          <li>this.setState with function</li>
          <li>React.createElement(elem, props, ...children)</li>
          <li>this.props.children</li>
          <li>React.PureComponent</li>
        </ol>
        <button onClick={e => this.handleEvent({ type: 'FETCH' })}>
          Fetch
        </button>
        <button onClick={e => this.handleEvent({ type: 'CLEAR' })}>
          Clear
        </button>
        <div>
          <ButtonFetchUlClass {...buttonFetchUlClassProps}>
            {this.getList(fetchedData, isDisplaying)}
          </ButtonFetchUlClass>
        </div>
      </div>
    )
  }
}

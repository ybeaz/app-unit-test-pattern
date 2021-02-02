import React, { useState, useEffect } from 'react'

import { ButtonFetchListUlFunc } from './ButtonFetchListUlFunc.react'
import './ButtonFetchListFunc.css'

export const ButtonFetchFunc = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [fetchedData, setFetchedData] = useState([])
  const [isDisplaying, setIsDisplaying] = useState(false)

  useEffect(() => {
    if (isFetching && fetchedData.length === 0) {
      fetch('./src/__mock__/mockData.json')
        .then(res => res.json())
        .then(data => {
          setFetchedData(() => data)
          setIsDisplaying(true)
        })
    }
  }, [isFetching])

  const handleEvent = action => {
    const { type } = action
    switch (type) {
      case 'FETCH':
        setIsFetching(true)
        setIsDisplaying(true)
        break
      case 'CLEAR':
        setIsDisplaying(false)
        break
      default:
        break
    }
  }

  const getList = (fetchedData, isDisplaying) => {
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

  // console.info('[31]', { isFetching, fetchedData, isDisplaying })
  return (
    <div className='ButtonFetchListFunc'>
      {React.createElement('p', null, 'ButtonFetchListFunc.react.js')}
      <ol className='ButtonFetchListFunc__features_list'>
        <li>useState with function</li>
        <li>useEffect with async fetch()</li>
        <li>React.createElement(elem, props, ...children)</li>
        <li>this.props.children</li>
      </ol>
      <button onClick={e => handleEvent({ type: 'FETCH' })}>Fetch</button>
      <button onClick={e => handleEvent({ type: 'CLEAR' })}>Clear</button>
      <div>
        <ButtonFetchListUlFunc className='ButtonFetchListFunc__ul'>
          {getList(fetchedData, isDisplaying)}
        </ButtonFetchListUlFunc>
      </div>
    </div>
  )
}

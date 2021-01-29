import React, { useState, useEffect } from 'react'

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
          setFetchedData(data)
          setIsDisplaying(true)
          console.info('[13]', data)
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
      <p>ButtonFetchListFunc.react.js</p>
      <button onClick={e => handleEvent({ type: 'FETCH' })}>Fetch</button>
      <button onClick={e => handleEvent({ type: 'CLEAR' })}>Clear</button>
      <div>
        <ul className='ButtonFetchListFunc__ul'>
          {getList(fetchedData, isDisplaying)}
        </ul>
      </div>
    </div>
  )
}

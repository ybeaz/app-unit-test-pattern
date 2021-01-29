import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './ToDoListFunc.css'

export const ToDoListFunc = () => {
  const { todoFunc } = useSelector(store => store)

  const getList = todoFunc => {
    return todoFunc.map((item, i) => {
      return <li>{item}</li>
    })
  }

  return <ul className='ToDoListFunc__ul'>{getList(todoFunc)}</ul>
}

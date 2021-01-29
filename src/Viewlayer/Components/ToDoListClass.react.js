import React from 'react'
import { connect } from 'react-redux'

import './ToDoListClass.css'

class ToDoListClassToConnect extends React.Component {
  getList = todoClass => {
    return todoClass.map((item, i) => {
      return <li>{item}</li>
    })
  }
  render() {
    return (
      <ul className='ToDoListClass__ul'>
        {this.getList(this.props.todoClass)}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  const { todoClass } = state
  return { todoClass }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchingEvent: () => dispatch(),
  }
}

export const ToDoListClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoListClassToConnect)

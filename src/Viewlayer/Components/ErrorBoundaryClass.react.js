import React from 'react'

export class ErrorBoundaryClass extends React.Component {
  state = {
    error: null,
    errorInfo: null,
  }

  componentDidCatch(error, errorInfo) {
    this.state({ error, errorInfo })
  }

  render() {
    const { error } = this.state
    const { children } = this.props
    return (
      <div>
        {error ? (
          <div>We experience unexpeced error: {erroInfo}</div>
        ) : (
          children
        )}
      </div>
    )
  }
}

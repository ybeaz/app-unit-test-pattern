import React from 'react'

export class ButtonFetchUlClass extends React.PureComponent {
  render() {
    const { className } = this.props
    return <ul className={className}>{this.props.children}</ul>
  }
}

// getList(fetchedData, isDisplaying)

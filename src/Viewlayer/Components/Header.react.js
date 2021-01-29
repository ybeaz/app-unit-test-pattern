import React from 'react'

// import logo from '../../React-icon.svg'
import './Header.css'
import '../CssStyles/Dev.css'

const logo = require('../../React-icon.svg')

export const Header = props => {
  return (
    <header className='Header'>
      <div className='Header__logoWrap'>
        <img src={logo.default} className='Header__logo' alt='logo' />
      </div>
      <div className='Header__linkWrap'>
        <a
          className='Header__link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Header.react.js
        </a>
      </div>
      <div className='Header__logoWrap'>
        <img className='Header__logo' alt='' />
      </div>
    </header>
  )
}

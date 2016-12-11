'use strict'
import '../static/css/style.css'
import '../static/css/Layout.css'

import React from 'react'
import HeaderMenu from './HeaderMenu'
import Footer from './Footer'

class Layout extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = '#FFFFFF'
  }
  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }
  render() {
    return <div className='container'>
      <HeaderMenu />
      <div className='content-and-footer debug'>
        <div className='content debug'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    </div>
  }
}

export default Layout

'use strict'
import '../../style.css'
import './home.css'

import React from 'react'
import HomePageMenuPanel from './HomePageMenuPanel'

class Home extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = '#0889AE'
  }
  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }
  render() {
    return <div>
      <img className='mb-logo-index-page horizontal-center debug' src={require('../shared/img/mb-logo-white.svg')}/>
      <HomePageMenuPanel />
    </div>
  }
}

export default Home

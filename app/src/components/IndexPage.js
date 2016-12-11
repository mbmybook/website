'use strict'
import '../static/css/style.css'
import '../static/css/IndexPage.css'

import React from 'react'
import IndexPageMenuPanel from './IndexPageMenuPanel'

class IndexPage extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = '#0889AE'
  }
  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }
  render() {
    return <div>
      <img className='mb-logo-index-page horizontal-center debug' src={require('../static/img/mb-logo-white.svg')}/>
      <IndexPageMenuPanel />
    </div>
  }
}

export default IndexPage

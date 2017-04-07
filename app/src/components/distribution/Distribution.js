'use strict'
import '../../style.css'
import './distribution.css'

import React from 'react'
import Helmet from 'react-helmet'

class Distribution extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <Helmet title='mb. MyBook - 派發地點' />
      </div>
    )
  }
}

export default Distribution

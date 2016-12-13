'use strict'
import '../static/css/style.css'

import React from 'react'

class Picture extends React.Component {
  render() {
    return <img className='horizontal-center vertical-center debug' src={this.props.src}/>
  }
}

export default Picture

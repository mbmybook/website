'use strict'
import '../../style.css'

import React from 'react'

class Picture extends React.Component {
  render() {
    const style = {
      'maxHeight': '100%',
      'maxWidth': '100%'
    }
    return <img className='no-borders horizontal-center vertical-center debug' style={style} src={this.props.src}/>
  }
}

export default Picture

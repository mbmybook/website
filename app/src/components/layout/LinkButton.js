'use strict'
import '../../style.css'
import './layout.css'

import React from 'react'

class LinkButton extends React.Component {
  render() {
    return <a href={this.props.link} target='_blank'>
      <img className='social-button-icon' src={require(`./img/footer/${this.props.icon}.svg`)}/>
    </a>
  }
}

export default LinkButton

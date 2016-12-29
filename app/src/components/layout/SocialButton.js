'use strict'
import './layout.css'

import React from 'react'

class SocialButton extends React.Component {
  render() {
    return <a href={this.props.item.link} target='_blank'>
      <img className='social-button-icon' src={require(`./img/footer/${this.props.item.icon}.png`)}/>
    </a>
  }
}

export default SocialButton
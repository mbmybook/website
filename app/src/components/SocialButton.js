'use strict'
import '../static/css/Layout.css'

import React from 'react'
import NavLink from './NavLink'

class SocialButton extends React.Component {
  render() {
    return <NavLink to={this.props.item.link}>
      <img className='social-button-icon' src={require(`../static/img/${this.props.item.icon}.png`)}/>
    </NavLink>
  }
}

export default SocialButton

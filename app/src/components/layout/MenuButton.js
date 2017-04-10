'use strict'
import '../../style.css'
import './menuButton.css'

import React from 'react'
import NavLink from '../shared/NavLink'

class MenuButton extends React.Component {
  activeLink(link, name) {
    console.log(link, name)
    if (this.context.router.isActive(link)) {
      return true
    } else {
      if (name === 'events' && /^\/events/.test(this.context.router.getCurrentLocation().pathname)) {
        return true
      } else {
        return false
      }
    }
  }
  setLinkStyle(isActive) {
    console.log(isActive)
    if (isActive) {
      return { color: '#ffffff', borderBottom: 'solid 2px #ffffff' }
    } else {
      return { color: 'rgba(255, 255, 255, 0.5)' }
    }
  }
  render() {
    const isActive = this.activeLink(this.props.item.link, this.props.item.english)
    const linkStyle = this.setLinkStyle(isActive)
    return (
      <NavLink className='menu-button font-helvetica font-size-15' style={linkStyle} to={this.props.item.link}>
        {this.props.item.chinese} {this.props.item.english}
      </NavLink>
    )
  }
}

MenuButton.contextTypes = {
  router: React.PropTypes.object
}

export default MenuButton

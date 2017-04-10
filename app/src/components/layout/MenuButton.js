'use strict'
import '../../style.css'
import './menuButton.css'

import React from 'react'
import NavLink from '../shared/NavLink'

class MenuButton extends React.Component {
  colorToRender(link, name) {
    if (this.context.router.isActive(link)) {
      return 'white'
    } else {
      if (name === 'Events' && /^\/events/.test(this.context.router.getCurrentLocation().pathname)) {
        return 'white'
      } else {
        return 'grey'
      }
    }
  }
  colorCodeForStyle(color) {
    switch (color) {
      case 'grey':
        return 'rgba(255, 255, 255, 0.5)'
      case 'white':
        return '#ffffff'
      default:
        return '#ffffff' // default to white
    }
  }
  render() {
    const color = this.colorToRender(this.props.item.link, this.props.item.english)
    const colorCode = this.colorCodeForStyle(color)
    const colorStyle = { color: colorCode }
    return (
      <NavLink className='menu-button font-helvetica font-size-15' style={colorStyle} to={this.props.item.link}>
        {this.props.item.chinese} {this.props.item.english}
      </NavLink>
    )
  }
}

MenuButton.contextTypes = {
  router: React.PropTypes.object
}

export default MenuButton

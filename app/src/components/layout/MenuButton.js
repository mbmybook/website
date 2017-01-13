'use strict'
import '../../style.css'
import './menuButton.css'

import React from 'react'
import NavLink from '../shared/NavLink'

class MenuButton extends React.Component {
  colorToRender(link, name) {
    if (this.context.router.isActive(link)) {
      return 'black'
    } else {
      if (name === 'Events' && /^\/events/.test(this.context.router.getCurrentLocation().pathname)) {
        return 'black'
      } else {
        return 'grey'
      }
    }
  }
  colorCodeForStyle(color) {
    switch (color) {
      case 'grey':
        return '#A5A5A5'
      case 'black':
        return '#000000'
      default:
        return '#000000' // default to black
    }
  }
  render() {
    const color = this.colorToRender(this.props.item.link, this.props.item.english)
    const colorCode = this.colorCodeForStyle(color)
    const borderColor = { borderColor: colorCode }
    const colorStyle = { color: colorCode }
    return <NavLink to={this.props.item.link}>
      <button className='menu-button' style={borderColor}>
        <img className='menu-button-icon' src={require(`./img/menuIcons/${this.props.item.icon}-${color}.svg`)}/>
        <span className='menu-button-text font-helvetica font-size-15' style={colorStyle}>{this.props.item.english}<br />{this.props.item.chinese}</span>
      </button>
    </NavLink>
  }
}

MenuButton.contextTypes = {
  router: React.PropTypes.object
}

export default MenuButton

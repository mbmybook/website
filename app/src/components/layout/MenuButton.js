'use strict'
import '../../style.css'
import './menuButton.css'

import React from 'react'
import NavLink from '../shared/NavLink'

class MenuButton extends React.Component {
  colorToRender(homepage, link, name) {
    if (homepage) {
      return 'white'
    } else {
      if (this.context.router.isActive(link)) {
        return 'black'
      } else {
        if (name === 'Events' && this.context.router.getCurrentLocation().pathname.startsWith('/events')) {
          return 'black'
        } else {
          return 'grey'
        }
      }
    }
  }
  colorCodeForStyle(color) {
    switch (color) {
      case 'white':
        return '#FFFFFF'
      case 'grey':
        return '#A5A5A5'
      case 'black':
        return '#000000'
      default:
        return '#000000' // default to black
    }
  }
  render() {
    const color = this.colorToRender(this.props.homepage, this.props.item.link, this.props.item.english)
    const colorCode = this.colorCodeForStyle(color)
    const borderStyle = { border: 'solid 1px ' + colorCode }
    const colorStyle = { color: colorCode }
    return <NavLink to={this.props.item.link}> 
      <button className='menu-button' style={borderStyle}>
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

'use strict'
import '../static/css/MenuButton.css'

import React from 'react'
import NavLink from './NavLink'

class MenuButton extends React.Component {
  render() {
    const color = this.props.color ? this.props.color : 'black' // set default to black
    const colorCode = color === 'white' ? '#FFFFFF' : '#000000' // default to black
    const borderStyle = { border: 'solid 1px ' + colorCode }
    const colorStyle = { color: colorCode }
    return <NavLink to={this.props.item.link}> 
      <button className='menu-button' style={borderStyle}>
        <img className='menu-button-icon' src={require(`../static/img/${this.props.item.icon}-${color}.svg`)}/>
        <span className='menu-button-text' style={colorStyle}>{this.props.item.english}<br />{this.props.item.chinese}</span>
      </button>
    </NavLink>
  }
}

export default MenuButton

'use strict'
import '../../style.css'
import './menuButton.css'

import React from 'react'
import NavLink from '../shared/NavLink'

class IndexMenuButton extends React.Component {
  render() {
    return <NavLink to={this.props.item.link}> 
      <button className='index-menu-button'>
        <img className='index-menu-button-icon' src={require(`./img/menuIcons/${this.props.item.icon}-white.svg`)}/>
        <span className='index-menu-button-text font-helvetica font-size-15'>{this.props.item.english}<br />{this.props.item.chinese}</span>
      </button>
    </NavLink>
  }
}

export default IndexMenuButton

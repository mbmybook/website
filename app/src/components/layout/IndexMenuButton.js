'use strict'
import '../../style.css'
import './menuButton.css'

import React from 'react'
import NavLink from '../shared/NavLink'

class IndexMenuButton extends React.Component {
  render() {
    return (
      <NavLink className='index-menu-button font-helvetica font-size-24-20-18' to={this.props.item.link}>
        {this.props.item.chinese} {this.props.item.english}
      </NavLink>
    )
  }
}

export default IndexMenuButton

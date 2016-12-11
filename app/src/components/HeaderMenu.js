'use strict'
import '../static/css/style.css'
import '../static/css/Layout.css'

import React from 'react'
import NavLink from './NavLink'
import MenuButton from './MenuButton'
import menuConfig from '../data/menu.json'

class HeaderMenu extends React.Component {
  render() {
    return <div className='header horizontal-center debug'>
      <div className='mb-logo-layout vertical-center debug'>
        <NavLink to='/' onlyActiveOnIndex={true}>
          <img src={require('../static/img/mb-logo-blue.svg')}/>
        </NavLink>
      </div>
      <div className='menu-panel-layout vertical-center debug'>
        {menuConfig.map(item => <MenuButton key={item.english} item={item} color='black'/>)}
      </div>
    </div>
  }
}

export default HeaderMenu

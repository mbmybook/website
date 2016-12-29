'use strict'
import '../../style.css'
import './layout.css'

import React from 'react'
import NavLink from '../shared/NavLink'
import MenuButton from './MenuButton'
import menuConfig from './menu.json'

class HeaderMenu extends React.Component {
  render() {
    return <div className='header horizontal-center debug'>
      <div className='mb-logo-layout vertical-center debug'>
        <NavLink to='/' onlyActiveOnIndex={true}>
          <img src={require('../shared/img/mb-logo-blue.svg')}/>
        </NavLink>
      </div>
      <div className='menu-panel-layout vertical-center debug'>
        {menuConfig.map(item => <MenuButton key={item.english} item={item} homepage={false}/>)}
      </div>
    </div>
  }
}

export default HeaderMenu

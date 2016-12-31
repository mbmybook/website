'use strict'
import '../../style.css'
import './layout.css'

import React from 'react'
import NavLink from '../shared/NavLink'
import MenuButton from './MenuButton'
import Picture from '../shared/Picture'
import menuConfig from './menu.json'

class HeaderMenu extends React.Component {
  render() {
    return <div className='header horizontal-center debug'>
      <div className='mb-logo-layout vertical-center debug'>
        <NavLink to='/' onlyActiveOnIndex={true}>
          <Picture src={require('../shared/img/mb-logo-blue.svg')}/>
        </NavLink>
      </div>
      <div className='menu-panel-layout vertical-center debug'>
        {menuConfig.map(item => <MenuButton key={item.english} item={item}/>)}
      </div>
    </div>
  }
}

export default HeaderMenu

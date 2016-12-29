'use strict'
import '../../style.css'
import './home.css'

import React from 'react'
import MenuButton from '../layout/MenuButton'
import menuConfig from '../layout/menu.json'

class HomePageMenuPanel extends React.Component {
  render() {
    return <div className='menu-panel-index-page horizontal-center debug'>
      {menuConfig.map(item => <MenuButton key={item.english} item={item} homepage={true} />)}
    </div>
  }
}

export default HomePageMenuPanel

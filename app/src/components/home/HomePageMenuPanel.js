'use strict'
import '../../style.css'
import './home.css'

import React from 'react'
import IndexMenuButton from '../layout/IndexMenuButton'
import menuConfig from '../layout/menu.json'

class HomePageMenuPanel extends React.Component {
  render() {
    return <div className='menu-panel-index-page horizontal-center debug'>
      {menuConfig.map(item => <IndexMenuButton key={item.english} item={item} />)}
    </div>
  }
}

export default HomePageMenuPanel

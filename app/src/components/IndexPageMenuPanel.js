'use strict'
import '../static/css/style.css'
import '../static/css/IndexPage.css'

import React from 'react'
import MenuButton from './MenuButton'
import menuConfig from '../data/menu.json'

class IndexPageMenuPanel extends React.Component {
  render() {
    return <div className='menu-panel-index-page horizontal-center debug'>
      {menuConfig.map(item => <MenuButton key={item.english} item={item} homepage={true} />)}
    </div>
  }
}

export default IndexPageMenuPanel

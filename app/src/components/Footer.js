'use strict'
import '../static/css/style.css'
import '../static/css/Layout.css'

import React from 'react'
import SocialButton from './SocialButton'
import socialConfig from '../data/social.json'

class Footer extends React.Component {
  render() {
    return <div className='footer-container debug'>
      <div className='footer horizontal-center debug'>
        <div className='contact-panel vertical-center debug'>
          PHONE EMAIL ADDRESS
        </div>
        <div className='social-panel vertical-center debug'>
          {socialConfig.map(item => <SocialButton key={item.icon} item={item} />)}
        </div>
      </div>
    </div>
  }
}

export default Footer

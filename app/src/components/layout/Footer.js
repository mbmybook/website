'use strict'
import '../../style.css'
import './layout.css'

import React from 'react'
import SocialButton from './SocialButton'
import socialConfig from './social.json'
import Picture from '../shared/Picture'

class Footer extends React.Component {
  render() {
    return <div className='footer-container debug'>
      <div className='footer horizontal-center debug'>
        <div className='footer-logo'>
          <Picture src={require('../shared/img/mb-logo-grey.svg')}/>
        </div>
        <div className='contact-panel font-helvetica font-size-15 vertical-center debug'>
          <span>聯絡我們 contact us</span>
          <a href='tel:604-518-6668'>604-518-6668</a>
          <a href='mailto:&#105;&#110;&#102;&#111;&#064;&#109;&#098;&#109;&#121;&#098;&#111;&#111;&#107;&#046;&#099;&#097;'>&#105;&#110;&#102;&#111;&#064;&#109;&#098;&#109;&#121;&#098;&#111;&#111;&#107;&#046;&#099;&#097;</a>
        </div>
        <div className='social-panel vertical-center debug'>
          {socialConfig.map(item => <SocialButton key={item.icon} item={item} />)}
        </div>
      </div>
    </div>
  }
}

export default Footer

'use strict'
import '../../style.css'
import './about.css'

import React from 'react'
import Helmet from 'react-helmet'
import Picture from '../shared/Picture'
import aboutParagraph from './about.json'

class About extends React.Component {
  render() {
    return <div className='about-panel horizontal-center debug'>
      <Helmet title='mb. MyBook - 關於我們' />
      <div className='paragraph-panel debug'>
        {aboutParagraph.map(paragraph => 
          <div key={paragraph.title}>
            <h1 className='about-paragraph-title font-helvetica font-size-32'>{paragraph.title}</h1>
            <p className='about-paragraph-content font-helvetica font-size-13'>{paragraph.content.split(/\\n/g).join('\n')}</p>
          </div>
        )}
      </div>
      <div className='about-image-panel debug'>
        <Picture src={require('./img/about-us-image.jpg')}/>
      </div>
    </div>
  }
}

export default About

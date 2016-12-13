'use strict'
import '../static/css/style.css'
import '../static/css/about.css'

import React from 'react'
import Picture from './Picture'
import aboutParagraph from '../data/about.json'

class About extends React.Component {
  render() {
    return <div className='about-panel horizontal-center debug'>
      <div className='paragraph-panel debug'>
        {aboutParagraph.map(paragraph => 
          <div key={paragraph.title}>
            <h1 className='about-paragraph-title font-helvetica font-size-24'>{paragraph.title}</h1>
            <p className='about-paragraph-content font-helvetica font-size-13'>{paragraph.content}</p>
          </div>
        )}
      </div>
      <div className='about-image-panel debug'>
        <Picture src={require('../static/img/mb-logo-blue.svg')}/>
      </div>
    </div>
  }
}

export default About

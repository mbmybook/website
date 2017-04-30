'use strict'
import '../../style.css'
import './events.css'

import React from 'react'
import NavLink from '../shared/NavLink'
import Picture from '../shared/Picture'

class EventPreview extends React.Component {
  render() {
    const imgSrc = this.props.featured_image ? this.props.featured_image : require('../shared/img/mb-logo-blue.svg')

    return (
      <NavLink className='event-preview-panel' to={'/events/' + this.props.slug}>
        <div className='event-preview-text-panel debug'>
          <h1 className='event-preview-title font-helvetica font-size-32 debug'>{this.props.title}</h1>
          <p className='event-preview-meta font-helvetica font-size-13'>{this.props.duration}</p>
          <p className='event-preview-meta font-helvetica font-size-13'>{this.props.location}</p>
          <div className='event-preview-summary font-helvetica font-size-13 debug'
             dangerouslySetInnerHTML={{__html: this.props.excerpt}}>
          </div>
        </div>
        <div className='event-preview-picture vertical-center horizontal-center debug'>
          <Picture src={imgSrc}/>
        </div>
      </NavLink>
    )
  }
}

export default EventPreview

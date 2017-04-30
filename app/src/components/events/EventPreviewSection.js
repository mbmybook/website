'use strict'
import '../../style.css'
import './events.css'

import React from 'react'

import EventPreview from './EventPreview'

class EventPreviewSection extends React.Component {
  render() {
    return (
      <div className='event-preview-section'>
        <h1 className='event-preview-section-title font-helvetica font-size-18'>{this.props.title}</h1>
        {this.props.events.length <= 0 ? (
          <p className='event-preview-section-placeholder font-helvetica font-size-13'>{this.props.placeholder}</p>
        ) : (
          this.props.events.map(event => 
            event.post && <EventPreview key={event.slug} slug={event.post.slug} title={event.post.title} duration={event.duration} location={event.location} excerpt={event.post.excerpt} featured_image={event.post.featured_image} />
          )
        )}
      </div>
    )
  }
}

export default EventPreviewSection

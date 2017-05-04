'use strict'
import '../../style.css'
import './events.css'

import React from 'react'

import NavLink from '../shared/NavLink'

class EventMetaSection extends React.Component {
  render() {
    if (this.props.events.length <= 0) {
      return <div></div>
    } else {
      return (
        <div className='event-meta-section debug'>
          <h1 className='event-meta-section-title font-helvetica font-size-18'>{this.props.title}</h1>
          {this.props.events.map(event => 
            <NavLink className='event-meta' key={event.slug} to={'/events/' + event.slug}>
              <p className='event-meta-title font-helvetica font-size-18'>{event.post ? event.post.title : event.slug}</p>
              <p className='event-meta-meta font-helvetica font-size-13'>{event.duration}</p>
              <p className='event-meta-meta font-helvetica font-size-13'>{event.location}</p>
            </NavLink>
          )}
        </div>
      )
    }
  }
}

export default EventMetaSection

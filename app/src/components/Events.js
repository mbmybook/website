'use strict'
import '../static/css/style.css'

import React from 'react'
import EventPreview from './EventPreview'

class Events extends React.Component {
  render() {
    return <div className='event-panel horizontal-center debug'> 
      <EventPreview />
      <EventPreview />
    </div>
  }
}

export default Events

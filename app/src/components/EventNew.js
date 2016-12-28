'use strict'
import '../static/css/style.css'
import '../static/css/event.css'

import React from 'react'
import Picture from './Picture'

class EventNew extends React.Component {
  render() {
    return (
      <div className='event-new-panel horizontal-center debug'>
        <Picture src={require('../static/img/event-new/0816-MB_P_82-1.jpg')}/>
        <Picture src={require('../static/img/event-new/0816-MB_P_83-1.jpg')}/>
        <Picture src={require('../static/img/event-new/0816-MB_P_84NEW-1.jpg')}/>
        <Picture src={require('../static/img/event-new/0816-MB_P_85-1.jpg')}/>
        <Picture src={require('../static/img/event-new/0816-MB_P_86-1.jpg')}/>
        <Picture src={require('../static/img/event-new/0816-MB_P_87-1.jpg')}/>
      </div>
    )
  }
}

export default EventNew

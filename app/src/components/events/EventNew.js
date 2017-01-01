'use strict'
import '../../style.css'
import './events.css'

import React from 'react'
import Picture from '../shared/Picture'

class EventNew extends React.Component {
  render() {
    const linkStyle = {
      display: 'block',
      width: '318px',
      height: '22px',
      position: 'absolute',
      left: '428px',
      top: '400px'
    }
    return (
      <div className='event-new-panel horizontal-center debug'>
        <h1 className='event-new-text font-helvetica font-size-24'>
          <strong>報名請點：<a href='http://2017chihuoevent.eventbrite.com' target='_blank'>2017chihuoevent.eventbrite.com</a></strong>
        </h1>
        <Picture src={require('./img/event-new/poster.jpg')}/>
        <Picture src={require('./img/event-new/0816-MB_P_82-1.jpg')}/>
        <Picture src={require('./img/event-new/0816-MB_P_83-1.jpg')}/>
        <Picture src={require('./img/event-new/0816-MB_P_84NEW-1.jpg')}/>
        <Picture src={require('./img/event-new/0816-MB_P_85-1.jpg')}/>
        <Picture src={require('./img/event-new/0816-MB_P_86-1.jpg')}/>
        <Picture src={require('./img/event-new/0816-MB_P_87-1.jpg')}/>
      </div>
    )
  }
}

export default EventNew

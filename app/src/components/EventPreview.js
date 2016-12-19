'use strict'
import '../static/css/style.css'
import '../static/css/event.css'

import React from 'react'
import EventWidget from './EventWidget'
import Picture from './Picture'

class EventPreview extends React.Component {
  render() {
    return <div className='event-preview-panel'>
      <div className='event-widget-panel debug'>
        <EventWidget color={'#0889ae'} text={'JAN 一月'}/>
        <EventWidget color={'#f3752a'} text={'Coming'}/>
      </div>
      <div className='event-preview-picture debug'>
        <Picture src={require('../static/img/mb-logo-blue.svg')}/>
      </div>
      <div className='event-preview-text-panel debug'>
        <h1 className='event-preview-title font-helvetica font-size-24 debug'>EVENT 1</h1>
        <p className='event-preview-meta font-helvetica font-size-13 debug'>Date Time Address Website</p>
        <p className='event-preview-summary font-helvetica font-size-13 debug'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  }
}

export default EventPreview

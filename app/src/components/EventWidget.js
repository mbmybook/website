'use strict'
import '../static/css/style.css'
import '../static/css/event.css'

import React from 'react'

class EventWidget extends React.Component {
  render() {
    const colorStyle = { 'backgroundColor': this.props.color }
    return <div className='event-widget debug' style={colorStyle}>
      <span className='event-widget-text font-helvetica font-size-15 horizontal-center vertical-center debug'>{this.props.text}</span>
    </div>
  }
}

export default EventWidget

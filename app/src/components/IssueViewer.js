'use strict'
import '../static/css/style.css'

import React from 'react'

class IssueViewer extends React.Component {
  render() {
    return (
      <iframe 
        className='horizontal-center vertical-center no-borders'
        src={this.props.source} allowFullScreen allowTransparency>
        <p>Your browser does not support iFrames.</p>
      </iframe> 
    )
  }
}

export default IssueViewer

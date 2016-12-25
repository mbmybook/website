'use strict'
import '../static/css/style.css'
import '../static/css/event.css'

import React from 'react'
import axios from 'axios'
import EventPreview from './EventPreview'
import appConfig from '../data/appConfig'

class Events extends React.Component {
  // serverRequest = null

  constructor(props) {
    super(props)
    this.state = { posts : [] }
  }
  
  componentWillMount() {
    const _this = this
    this.serverRequest = 
      axios
        .get(appConfig.EVENTS_URL)
        .then(function(res) {    
          _this.setState({
            posts: res.data.posts
          });
        })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    if (this.state.posts.length > 0) {
      console.log('posts: ' + this.state.posts[0].content)
      return (
        <div className='event-panel horizontal-center debug'>
          <EventPreview />
          <EventPreview />
        </div>
      )
    } else {
      return <div className='event-panel horizontal-center debug'/>
    }
  }
}

export default Events

'use strict'
import '../static/css/style.css'
import '../static/css/event.css'

import React from 'react'
import axios from 'axios'
import EventPreview from './EventPreview'
import appConfig from '../data/appConfig'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts : [] }
  }
  
  componentDidMount() {
    axios.get(appConfig.EVENTS_URL)
      .then(res => {    
        this.setState({
          posts: res.data.posts
        })
      })
      .catch(thrown => {
        if (axios.isCancel(thrown)) {
          // console.log('Request canceled', thrown.message);
        } else {
          // handle error
        }
      })
  }

  componentWillUnmount() {
    source.cancel('Operation canceled by the user.')
  }

  render() {
    if (this.state.posts.length > 0) {
      return (
        <div className='event-panel horizontal-center debug'>
          {this.state.posts.map(post =>
            <EventPreview key={post.slug} slug={post.slug} title={post.title} date={post.date} excerpt={post.excerpt} featured_image={post.featured_image} />
          )}
        </div>
      )
    } else {
      return <div className='event-panel horizontal-center debug'/>
    }
  }
}

export default Events

'use strict'
import '../../style.css'
import './events.css'

import React from 'react'
import Helmet from 'react-helmet'
import axios from 'axios'

import EventMetaSection from './EventMetaSection'
import EventPreviewSection from './EventPreviewSection'
import Picture from '../shared/Picture'
import eventData from './eventData.json'
import appConfig from '../../appConfig'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const currentTitle = '人氣活動 NOW!!!'
const comingTitle = '預告活動 coming soon…'
const pastTitle = '昔日活動 past'
const currentPlaceholder = '沒有進行中的活動。'
const comingPlaceholder = '敬請期待!!!'
const pastPlaceholder = '沒有活動。'

class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      posts : []
    }
    this.event = {}
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

  updateEventLists() {
    const { posts } = this.state
    const past = []
    const current = []
    const coming = []
    eventData.map(event => {
      let post
      if (Array.prototype.find) {
        post = posts.find(post => {
          return post.slug === event.slug
        })
      } else {
        // IE
        posts.forEach(p => {
          if (p.slug === event.slug) {
            post = p
          }
        })
      }
      event.post = post

      const now = Date.now()
      const start_date = new Date(event.start_date)
      const end_date = new Date(event.end_date)
      if (end_date < now) {
        past.push(event)
      } else if (now < start_date) {
        coming.push(event)
      } else {
        current.push(event)
      }
    })
    this.events = { past: past, current: current, coming: coming }
  }

  render() {
    this.updateEventLists()    
    return (
      <div className='event-panel horizontal-center debug'>
        <Helmet title='mb. MyBook - 活動推廣' />
        <div className='event-banner'>
          <Picture src={require('./img/event-banner.jpg')}/>
        </div>
        <div className='event-main-panel'>
          <div className='event-meta-list'>
            <EventMetaSection key={'current'} title={currentTitle} placeholder={currentPlaceholder} events={this.events.current} />
            <EventMetaSection key={'coming'} title={comingTitle} placeholder={comingPlaceholder} events={this.events.coming} />
            <EventMetaSection key={'past'} title={pastTitle} placeholder={pastPlaceholder} events={this.events.past} />
          </div>
          <div className='event-preview-list'>
            <EventPreviewSection key={'current'} title={currentTitle} placeholder={currentPlaceholder} events={this.events.current} />
            <EventPreviewSection key={'coming'} title={comingTitle} placeholder={comingPlaceholder} events={this.events.coming} />
            <EventPreviewSection key={'past'} title={pastTitle} placeholder={pastPlaceholder} events={this.events.past} />
          </div>
        </div>
      </div>
    )
  }
}

export default Events

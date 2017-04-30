'use strict'
import '../../style.css'
import './events.css'

import React from 'react'
import axios from 'axios'

import Picture from '../shared/Picture'
import eventData from './eventData.json'
import appConfig from '../../appConfig'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const currentTitle = '人氣活動 current event'
const comingTitle = '預告活動 coming event'
const pastTitle = '昔日活動 past event'

class EventDetail extends React.Component {
  constructor(props) {
    super(props)

    let event
    if (Array.prototype.find) {
      event = eventData.find(event => {
        return event.slug === this.props.params.slug
      })
    } else {
      // IE
      eventData.forEach(e => {
        if (e.slug === this.props.params.slug) {
          event = e
        }
      })
    }

    const now = Date.now()
    const start_date = new Date(event.start_date)
    const end_date = new Date(event.end_date)
    let sectionTitle = ''
    if (end_date < now) {
      sectionTitle = pastTitle
    } else if (now < start_date) {
      sectionTitle = comingTitle
    } else {
      sectionTitle = currentTitle
    }

    this.state = { ...event, sectionTitle : sectionTitle, post : {} }
  }
  
  componentDidMount() {
    axios.get(appConfig.EVENTS_URL + '/slug:' + this.props.params.slug)
      .then(res => {    
        this.setState({
          post: res.data
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
    const { sectionTitle, post, duration, location, other_meta } = this.state
    const imgSrc = post.featured_image ? post.featured_image : require('../shared/img/mb-logo-blue.svg')

    return (
      <div className='event-detail-panel horizontal-center debug'>
        <p className='event-detail-topnav font-helvetica font-size-13'>所有活動 all events > {sectionTitle} > {post.title}</p>
        <div className='event-detail-main-panel'>
          <div className='event-detail-meta-panel'>
            <div className='event-detail-picture'>
              <Picture src={imgSrc}/>
            </div>
            <p className='event-detail-meta-title font-helvetica font-size-18'>{post.title}</p>
            <p className='event-detail-meta-meta font-helvetica font-size-13'>{duration}</p>
            <p className='event-detail-meta-meta font-helvetica font-size-13'>{location}</p>
            { other_meta && <p className='event-detail-meta-other font-helvetica font-size-13'>{other_meta.split(/\\n/g).join('\n')}</p>}
          </div>
          <div className='event-detail-detail-panel'>
            <h1 className='event-detail-detail-title font-helvetica font-size-32 debug'>{post.title}</h1>
            <p className='event-detail-detail-meta font-helvetica font-size-13 debug'>{duration}</p>
            <p className='event-detail-detail-meta font-helvetica font-size-13 debug'>{location}</p>
            <div className='event-detail-detail-content font-helvetica font-size-13 debug'
                dangerouslySetInnerHTML={{__html: post.content}}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventDetail

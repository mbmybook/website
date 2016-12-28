'use strict'
import '../static/css/style.css'
import '../static/css/event.css'

import React from 'react'
import moment from 'moment'
import axios from 'axios'
import appConfig from '../data/appConfig'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

class EventDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { post : {} }
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
    const date = new Date(this.state.post.date)
    const formatDateTime = moment(date).format('YYYY-MM-DD hh:mm')

    return <div className='event-detail-panel horizontal-center debug'> 
      <h1 className='event-detail-title font-helvetica font-size-24 debug'>{this.state.post.title}</h1>
      <p className='event-detail-meta font-helvetica font-size-13 debug'>{formatDateTime}</p>
      <div className='event-detail-content font-helvetica font-size-13 debug'
           dangerouslySetInnerHTML={{__html: this.state.post.content}}></div>
    </div>
  }
}

export default EventDetail

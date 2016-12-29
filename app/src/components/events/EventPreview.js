'use strict'
import '../../style.css'
import './events.css'

import React from 'react'
import moment from 'moment'
import NavLink from '../shared/NavLink'
import EventWidget from './EventWidget'
import Picture from '../shared/Picture'

const formatMonth = ['JAN 一月', 'FEB 二月', 'MAR 三月', 'APR 四月', 'MAY 五月', 'JUN 六月', 'JUL 七月', 'AUG 八月', 'SEP 九月', 'OCT 十月', 'NOV 十一月', 'DEC 十二月']

class EventPreview extends React.Component {
  render() {
    const date = new Date(this.props.date)
    const now = Date.now()
    const formatDateTime = moment(date).format('YYYY-MM-DD hh:mm')
    const imgSrc = this.props.featured_image ? this.props.featured_image : require('../shared/img/mb-logo-blue.svg')

    return (
      <NavLink className='event-preview-panel' to={'/events/' + this.props.slug}>
        <div className='event-widget-panel debug'>
          <EventWidget color={'#0889ae'} text={formatMonth[date.getMonth()]}/>
          {date < now ? (
            <EventWidget color={'#bebebe'} text={'Past'}/>
          ) : (
            <EventWidget color={'#f3752a'} text={'Coming'}/>
          )}
        </div>
        <div className='event-preview-picture debug'>
          <Picture src={imgSrc}/>
        </div>
        <div className='event-preview-text-panel debug'>
          <h1 className='event-preview-title font-helvetica font-size-24 debug'>{this.props.title}</h1>
          <p className='event-preview-meta font-helvetica font-size-13 debug'>{formatDateTime}</p>
          <div className='event-preview-summary font-helvetica font-size-13 debug'
             dangerouslySetInnerHTML={{__html: this.props.excerpt}}>
          </div>
        </div>
      </NavLink>
    )
  }
}

export default EventPreview

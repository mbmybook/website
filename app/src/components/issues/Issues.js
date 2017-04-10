'use strict'
import '../../style.css'
import './issues.css'

import React from 'react'
import Helmet from 'react-helmet'
import Picture from '../shared/Picture'
import IssueViewer from './IssueViewer'
import issueData from './issue.json'

class Issues extends React.Component {
  constructor(props) {
    super(props)
    this.state = {issue: issueData[0]}

    this.updateCurrentIssue = this.updateCurrentIssue.bind(this)
  }

  updateCurrentIssue(issue) {
    this.setState({issue: issue})
  }

  render() {
    return <div className='issues-panel horizontal-center debug'>
      <Helmet title='mb. MyBook - 電子雜誌' />
      <div className='issue-list-panel debug'>
        {issueData.map(issue => 
          <a href='#' className='issue-list-link debug' onClick={() => this.updateCurrentIssue(issue)} key={issue.title}>
            <Picture src={require(`./img/covers/${issue.cover}`)}/>
          </a>
        )}
      </div>
      <div className='current-issue-panel debug'>
        <div className='issue-special-panel'>
          <h1 className='issue-view-title font-helvetica font-size-32'>{this.state.issue.title}</h1>
          <h1 className='issue-special-title font-helvetica font-size-18'>特別內容</h1>
          <p className='issue-special-content font-helvetica font-size-18'>{this.state.issue.special.split(/\\n/g).join('\n')}</p>
        </div>
        <div className='issue-viewer horizontal-center debug'>
          <IssueViewer source={this.state.issue.source}/>
        </div>
      </div>
    </div>
  }
}

export default Issues

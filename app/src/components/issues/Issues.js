'use strict'
import '../../style.css'
import './issues.css'

import React from 'react'
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
      <div className='current-issue-panel debug'>
        <h1 className='issue-view-title font-helvetica font-size-24'>{this.state.issue.title}</h1>
        <div className='issue-viewer horizontal-center debug'>
          <IssueViewer source={this.state.issue.source}/>
        </div>
        <h1 className='issue-special-title font-helvetica font-size-24'>特別內容</h1>
        <p className='issue-special-content font-helvetica font-size-13'>{this.state.issue.special.split(/\\n/g).join('\n')}</p>
      </div>
      <div className='issue-list-panel debug'>
        {issueData.map(issue => 
          <a href='#' className='issue-list-link debug' onClick={() => this.updateCurrentIssue(issue)} key={issue.title}>
            <Picture src={require(`./img/covers/${issue.cover}`)}/>
            <p className='issue-list-text font-helvetica font-size-13'>{issue.title}</p>
          </a>
        )}
      </div>
    </div>
  }
}

export default Issues

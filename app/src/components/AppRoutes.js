'use strict'
import '../static/css/style.css'

import React from 'react'
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'
import ReactGA from 'react-ga'

import App from './App'
import IndexPage from './IndexPage'
import Layout from './Layout'
import About from './About'
import Issues from './Issues'
import Events from './Events'
import EventNew from './EventNew'
import EventDetail from './EventDetail'

ReactGA.initialize('UA-89444152-1')

function logPageView() {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class AppRoutes extends React.Component {
  render() {
    return <Router history={browserHistory} onUpdate={logPageView}>
      <Route path='/' component={App}>
        <IndexRoute component={IndexPage}/>
        <Route component={Layout}>
          <Route path='/about' component={About}/>
          <Route path='/issues' component={Issues}/>
          <Route path='/events' component={Events}/>
          <Route path='/events/new' component={EventNew}/>
          <Route path='/events/:slug' component={EventDetail}/>
        </Route>
        <Redirect from='*' to='/'/>
      </Route>
    </Router>
  }
}

export default AppRoutes
'use strict'
import './style.css'

import React from 'react'
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'
import ReactGA from 'react-ga'

import App from './App'
import Home from './components/home/Home'
import Layout from './components/layout/Layout'
import About from './components/about/About'
import Issues from './components/issues/Issues'
import Events from './components/events/Events'
import EventNew from './components/events/EventNew'
import EventDetail from './components/events/EventDetail'

ReactGA.initialize('UA-89444152-1')

function logPageView() {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

class AppRoutes extends React.Component {
  render() {
    return <Router history={browserHistory} onUpdate={logPageView}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
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
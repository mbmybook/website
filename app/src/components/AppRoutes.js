'use strict'
import '../static/css/style.css'

import React from 'react'
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'
import App from './App'
import IndexPage from './IndexPage'
import Layout from './Layout'
import About from './About'
import Issues from './Issues'
import Events from './Events'

class AppRoutes extends React.Component {
  render() {
    return <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={IndexPage}/>
        <Route component={Layout}>
          <Route path='/about' component={About}/>
          <Route path='/issues' component={Issues}/>
          <Route path='/events' component={Events}/>
        </Route>
        <Redirect from='*' to='/'/>
      </Route>
    </Router>
  }
}

export default AppRoutes
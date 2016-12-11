'use strict'
import '../static/css/style.css'

import React from 'react'
import { Link } from 'react-router'

class NavLink extends React.Component {
  render() {
    return <Link {...this.props} activeClassName="navlink-active"/>
  }
}

export default NavLink
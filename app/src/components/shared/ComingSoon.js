'use strict'
import '../../style.css'

import React from 'react'

class ComingSoon extends React.Component {
  render() {
    return <div className="center-div">
		<img className="center-img" src={require('./img/mb-logo-white.svg')}/>
		<div className="center-text">
			<span className="text-line"><b>Coming Soon...</b></span>
			<span className="text-line"><b>籌備中...</b></span>
			<span className="text-line"><b>筹备中...</b></span>
		</div>
	</div>
  }
}

export default ComingSoon

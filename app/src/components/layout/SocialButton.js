'use strict'
import '../../style.css'
import './layout.css'

import React from 'react'
import LinkButton from './LinkButton'
import ModalButton from './ModalButton'

class SocialButton extends React.Component {
  render() {
    if (this.props.item.type === 'link') {
      if (window.screen.width > 800) {
        return <LinkButton icon={this.props.item.icon} link={this.props.item.link}/>
      } else {
        return <LinkButton icon={this.props.item.icon} link={this.props.item.deep_link}/>
      }
      
    } else if (this.props.item.type === 'modal') {
      if (window.screen.width > 800) {
        return <ModalButton icon={this.props.item.icon} image={this.props.item.image}/>
      } else {
        return <LinkButton icon={this.props.item.icon} link={this.props.item.link}/>
      }
    } else {
      // handle error
      return <div />
    }
  }
}

export default SocialButton

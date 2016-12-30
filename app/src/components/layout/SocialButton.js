'use strict'
import '../../style.css'
import './layout.css'

import React from 'react'
import LinkButton from './LinkButton'
import ModalButton from './ModalButton'

class SocialButton extends React.Component {
  render() {
    if (this.props.item.type === 'link') {
      return <LinkButton icon={this.props.item.icon} link={this.props.item.link}/>
    } else if (this.props.item.type === 'modal') {
      return <ModalButton icon={this.props.item.icon} image={this.props.item.image}/>
    } else {
      // handle error
      return <div />
    }
  }
}

export default SocialButton

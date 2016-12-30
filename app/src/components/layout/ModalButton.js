'use strict'
import '../../style.css'
import './layout.css'

import React from 'react'
import ReactModal from 'react-modal'
import Picture from '../shared/Picture'

class ModalButton extends React.Component {
  constructor () {
    super()
    this.state = { showModal: false }
    
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }
  
  handleOpenModal () {
    this.setState({ showModal: true })
  }
  handleCloseModal () {
    this.setState({ showModal: false })
  }
  
  render() {
    return (
      <span>
        <img className='social-button-icon modal-button-icon' src={require(`./img/footer/${this.props.icon}.svg`)} onClick={this.handleOpenModal}/>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel='Modal Button'
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={true}
           className='modal-button-modal horizontal-center vertical-center'
           overlayClassName='modal-button-overlay'
        >
          <Picture src={require(`./img/footer/${this.props.image}`)}/>
        </ReactModal>
      </span>
    )
  }
}

export default ModalButton

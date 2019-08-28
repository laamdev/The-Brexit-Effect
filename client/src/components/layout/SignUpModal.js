import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Signup from '../auth/Signup'

class SignUpModal extends Component {
    render() {
        return (    
        <Modal
        {...this.props}
        size="large"
      >
          <Modal.Header closeButton>
            <Modal.Title>
              Signup
            </Modal.Title>
          </Modal.Header>
          <Modal.Body><Signup setUser={this.props.setUser}/></Modal.Body>
        </Modal>
    );
  }
}

export default SignUpModal

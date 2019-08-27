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
        aria-labelledby="contained-modal-title-lg"
      >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body><Signup setUser={this.props.setUser}/></Modal.Body>
          <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
  }
}

export default SignUpModal

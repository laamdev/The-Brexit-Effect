//MODAL TEMPLATE

import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Login from '../auth/Login'


class LoginModal extends Component {

render() {
    return (
  
        <Modal
        {...this.props}
          size="small"
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body><Login setUser={this.props.setUser}/></Modal.Body>
          <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}
}
  
export default LoginModal
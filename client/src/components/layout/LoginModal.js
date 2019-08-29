//MODAL TEMPLATE

import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Login from '../auth/Login'



class LoginModal extends Component {

render() {
    return (
  
        <Modal className="modal-auth"
        {...this.props}
          size="sm"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login setUser={this.props.setUser}/>
          </Modal.Body>
        </Modal>
    )
}
}
  
export default LoginModal
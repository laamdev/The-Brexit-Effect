import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import ConversionHistory from "./ConversionHistory";



class ConversionHistoryModal extends Component {

render() {
    return (
  
        <Modal className="modal-auth"
        {...this.props}
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Conversion History
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ConversionHistory />
          </Modal.Body>
        </Modal>
    )
}
}
  
export default ConversionHistoryModal
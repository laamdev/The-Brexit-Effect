import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import ConversionCard from "./ConversionCard"
import { Container, Row, Col } from 'react-bootstrap'
import Services from "../../../services/user.services";



class ConversionHistoryModal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.conversionList)
    this.services = new Services()
  }


render() {
    return (
  
        <Modal className="modal-auth"
        {...this.props}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Conversion History
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                {this.props.conversionList.map((conversion) => (
              
              <Col>

              <ConversionCard key={conversion._id} {...conversion}   />

              </Col>

              )

              )}
          </Modal.Body>
        </Modal>
    )
}
}
  
export default ConversionHistoryModal
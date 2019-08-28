import React, {Component} from "react";
import MapContainer from "./maps/MapContainer";
import AuthServices from "../../services/auth.services";
import Converter from "./currency/Converter"
import { Container, Row, Col }  from "react-bootstrap"

import "../../styles/profile.css"
import ConversionHistory from "./currency/ConversionHistory";
import ConversionHistoryModal from "./currency/ConversionHistoryModal";




class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { lgShow: false }
    this.authServices = new AuthServices();
  }

  render() {

    let lgClose = () => this.setState({ lgShow: false });

    // const greetings = this.props.userInSession ? this.props.userInSession.data.username : "invitado";
    // const profilePic = this.props.userInSession ? this.props.userInSession.data.imageURL : null;

      return (
        <>
        <Container>

        {/* <p>{this.props.userInSession.data.username}</p>
        
        <img className="profile-pic" src={this.props.userInSession.data.imageURL}></img> */}

{/* capital={this.props.userInSession.data.money} */}

        <Row className = "converter">

            <Col md={8}>
            <Converter />
            </Col>

            <Col md={4}>
            <button onClick={()=> this.setState({ lgShow: true})} className="btn btn-dark btn-md">Show Conversions</button>
            </Col>

            <ConversionHistoryModal show={this.state.lgShow} onHide={lgClose} setUser={this.props.setUser}/>

        </Row>

        <Row >
          <MapContainer className="map" />
        </Row>



        </Container>

        </>
         );

    }
  }
    

export default Profile;

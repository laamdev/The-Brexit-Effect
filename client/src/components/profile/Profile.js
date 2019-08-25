import React, {Component} from "react";
import MapContainer from "./maps/MapContainer";
import AuthServices from "../../services/auth.services";
import Converter from "./currency/Converter"


class Profile extends Component {
  constructor(props) {
    super(props);
    this.authServices = new AuthServices();
  }

  render() {
    // const greetings = this.props.userInSession ? this.props.userInSession.data.username : "invitado";
    // const profilePic = this.props.userInSession ? this.props.userInSession.data.imageURL : null;

      return (
        <>
        <p>{this.props.userInSession.data.username}</p>
        <img src={this.props.userInSession.data.imageURL}></img>
        <Converter capital={this.props.userInSession.data.money}/>

        <MapContainer />
        </>
         );

    }
  }
    

export default Profile;

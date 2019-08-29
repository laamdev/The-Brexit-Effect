import React, {Component} from "react";
import MapContainer from "./maps/MapContainer";
import AuthServices from "../../services/auth.services";
import Converter from "./currency/Converter"
import { Container, Row, Col }  from "react-bootstrap"
// import ConversionHistory from "./currency/ConversionHistory";
// import ConversionHistoryModal from "./currency/ConversionHistoryModal";
import Services from "../../services/user.services"
import ConversionCard from "./currency/ConversionCard"


class Profile extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { conversionList:[] }
    this.authServices = new AuthServices();
    this.services = new Services();


  }

  componentDidMount = () => {
    this.showList()
  } 

  showList = () => {
    this.services
    .getAllConversions(this.props.userInSession)
    .then(response => this.setState({ conversionList: response.data })
    )
    .catch(err => console.log(err))
  }

  render() {
    const greetings = this.props.userInSession ? this.props.userInSession.data.username : "invitado";
    const profilePic = this.props.userInSession ? this.props.userInSession.data.imageURL : null;

      return (
        <>
        <Container>

        {/* <p>{this.props.userInSession.data.username}</p>
        
        <img className="profile-pic" src={this.props.userInSession.data.imageURL}></img> */}

{/* capital={this.props.userInSession.data.money} */}

        <Row className = "converter" >

            <Converter userInSession = {this.props.userInSession} getConversionList={this.showList}/>

        </Row>

        <Row className="justify-content-center">
          <div className="map">
            <MapContainer />
           </div>
        </Row>

        <div className="conversion-cards-container">
          
          {this.state.conversionList && this.state.conversionList.map (conversion => <ConversionCard getConversionList={this.showList} key={conversion._id} {...conversion} />)
}
        </div> 

        </Container>

        </>
         );

    }
  }
    

export default Profile;

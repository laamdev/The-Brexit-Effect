import React, { Component } from 'react'

import LoginModal from './LoginModal'

import SignUpModal from './SignUpModal'

import { Navbar, Nav, Button, ButtonToolbar } from 'react-bootstrap';

import AuthServices from '../../services/auth.services'


class NavBarComponent extends Component {


    constructor(props, context) {
        super(props, context)

        this.state = { 
          loggedInUser: null,
          smShow: false, 
          lgShow: false
        }

        this.authServices = new AuthServices()

      }
           
        logout = () => {
            this.authServices.logout()
                .then(x => {
                    this.props.setUser(null)
                })
                .catch(err => console.log(err))
    }


    render() {

      let smClose = () => this.setState({ smShow: false });
      let lgClose = () => this.setState({ lgShow: false });

      if (this.props.userInSession) {

      return (
        <>
          <div>
          <Navbar bg="light" expand="lg">

          <Navbar.Brand href="/">The Brexit Effect</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav"/>

          <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">

          <Nav.Item>

              <Nav.Link href="/dashboard">Dashboard</Nav.Link>

              </Nav.Item>

              <Nav.Item>
              <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav.Item>

              <Nav.Item>

              <Nav.Link href="/" onClick={this.logout}>Logout</Nav.Link>
              </Nav.Item>

          </Nav>

          </Navbar.Collapse>

          </Navbar>
          </div>
        </>


            )

        } else {
            return (
              <>
              
              <div>

              <Navbar bg="light" expand="lg">
    
              <Navbar.Brand href="/">The Brexit Effect</Navbar.Brand>
    
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    
              <Navbar.Collapse id="basic-navbar-nav">
    
              <Nav className="mr-auto">

              <Nav.Item>
              <Nav.Link onClick={() => this.setState({ smShow: true})}>
              Login    
              </Nav.Link>          
              </Nav.Item>

              <Nav.Item>
              <Nav.Link onClick={() => this.setState({ lgShow: true})}>
              Signup    
              </Nav.Link>          
              </Nav.Item>



              <LoginModal show={this.state.smShow} onHide={smClose} setUser={this.props.setUser} />
              
              <SignUpModal show={this.state.lgShow} onHide={lgClose} setUser={this.props.setUser}/>

        
    
              </Nav>
    
              </Navbar.Collapse>
    
              </Navbar>

              </div>
            </>
    
            )
        }

    }
}
export default NavBarComponent



import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'
import { Navbar, Nav } from 'react-bootstrap';
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
          <Navbar  variant="dark" expand="lg">

          <Navbar.Brand className="logo" style={{ textDecoration: 'none', color: '#0d0d0d' }} href="/">The Brexit Effect</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav"/>

          <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="justify-content-end" style={{ width: "100%" }} >

          <Nav.Item style={{ textDecoration: 'none', color: '#0d0d0d' }} className="nav-item">

              <Link style={{ textDecoration: 'none', color: '#0d0d0d' }} to="/dashboard">Dashboard</Link>

              </Nav.Item>

              <Nav.Item className="nav-item">
              <Link style={{ textDecoration: 'none', color: '#0d0d0d' }} to="/profile">Profile</Link>
              </Nav.Item>

              <Nav.Item className="nav-item">

              <Link style={{ textDecoration: 'none', color: '#0d0d0d' }} to="/" onClick={this.logout}>Logout</Link>
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

              <Navbar variant="dark"  expand="lg">
    
              <Navbar.Brand style={{ textDecoration: 'none', color: '#0d0d0d' }} href="/">The Brexit Effect</Navbar.Brand>
    
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    
              <Navbar.Collapse id="basic-navbar-nav">
    
              <Nav className="justify-content-end" style={{ width: "100%" }}>

              <Nav.Item className="nav-item">
              <Link style={{ textDecoration: 'none', color: '#0d0d0d' }} onClick={() => this.setState({ smShow: true})}>
              Login    
              </Link>          
              </Nav.Item>

              <Nav.Item className="nav-item">
              <Link style={{ textDecoration: 'none', color: '#0d0d0d' }} onClick={() => this.setState({ lgShow: true})}>
              Signup    
              </Link>          
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



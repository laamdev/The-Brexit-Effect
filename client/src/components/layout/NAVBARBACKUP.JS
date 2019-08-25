// import React, { Component } from "react";
// // import { Link } from "react-router-dom";
// import { Nav, Navbar } from "react-bootstrap";
// import styled from "styled-components";
// import AuthServices from "../../services/auth.services";

// import "../../styles/nav-bar.css";

// const Styles = styled.div`
//   .navbar {
//     background.color: #222;
//   }

//   .profilePic {
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//   }

//   .navbar-brand,
//   -navbar-nav .nav-link {
//     color: #bbb;

//     &:hover {
//       color: white;
//     }
//   }
// `;

// class NavBar extends Component {
//   constructor(props) {
//     super(props);
//     this.authServices = new AuthServices();
//     this.state = {showModal = false}

//     this.handleOpenModal = this.handleOpenModal.bind(this);
//     this.handleCloseModal = this.handleCloseModal.bind(this);
//   }

// handleOpenModal () {
//   this.setState({ showModal: true });
// }

// handleCloseModal () {
//   this.setState({ showModal: false });
// }

//   logout = () => {
//     this.authServices
//       .logout()
//       .then(x => {
//         this.props.setUser(null);
//       })
//       .catch(err => console.log(err));
//   };

//   render() {
//     // const greetings = this.props.userInSession ? this.props.userInSession.data.username : "invitado";
//     // const profilePic = this.props.userInSession ? this.props.userInSession.data.imageURL : null;

//     //!USER LOGGED IN
//     if (this.props.userInSession) {
//       return (
//         <>
//           <Styles>
//             <Navbar expand="lg">
//               <Navbar.Brand href="/"> The Brexit Effect</Navbar.Brand>

//               <Navbar.Toggle aria-controls="basic-navbar-nav" />

//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                   <Nav.Item>
//                     <Nav.Link href="/dashboard">Dashboard</Nav.Link>
//                   </Nav.Item>

//                   <Nav.Item>
//                     <Nav.Link href="/profile">Profile</Nav.Link>
//                   </Nav.Item>

//                   <Nav.Item>
//                     <Nav.Link href="/" onClick={this.logout}>
//                       Logout
//                     </Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//           </Styles>
//         </>
//       );

//       //!USER NOT LOGGED IN
//     } else {
//       return (
//         <>
//           <Styles>
//             <Navbar expand="lg">
//               <Navbar.Brand href="/"> The Brexit Effect></Navbar.Brand>

//               <Navbar.Toggle aria-controls="basic-navbar-nav" />

//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                   <Nav.Item>
//                     <Nav.Link href="/signup">Signup</Nav.Link>
//                   </Nav.Item>

//                   <Nav.Item>
//                     <Nav.Link href="/login">Login</Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//           </Styles>
//         </>
//       );
//     }
//   }
// }
// export default NavBar;

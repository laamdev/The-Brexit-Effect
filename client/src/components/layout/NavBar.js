import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AuthServices from '../../services/auth.services'

import '../../styles/nav-bar.css'


class NavBar extends Component {

    constructor(props) {
        super(props)
        this.authServices = new AuthServices()
    }


    toggleMenu = () => document.querySelector('.menu').classList.toggle('open')

    logout = () => {
        this.authServices.logout()
            .then(x => {
                this.props.setUser(null)
            })
            .catch(err => console.log(err))
    }


    render() {

        const greetings = this.props.userInSession ? this.props.userInSession.data.username : 'invitado'
        const profilePic = this.props.userInSession ? this.props.userInSession.data.imageURL : null


        if (this.props.userInSession) {
            return (
                <>
                    <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
                    <header className="menu">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/" onClick={this.logout}>Logout</Link></li>
                                <li><small className="userID">Welcome, {greetings}<img src={profilePic}></img></small></li>
                            </ul>
                        </nav>
                    </header>
                </>
            )
        } else {
            return (
                <>
                    <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
                    <header className="menu">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/signup">Signup</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                {/* <li><small>Welcome, {greetings}</small></li> */}
                            </ul>
                        </nav>
                    </header>
                </>
            )
        }

    }
}
export default NavBar
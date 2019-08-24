import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = { loggedInUser: null }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
    }

    render() {

        return (
            <div className="footer-style">
                <button className="profile-button"></button>
                <Link to="/planazo-front/"><button className="home-button"></button></Link>
            </div>
        )

    }
}

export default Footer
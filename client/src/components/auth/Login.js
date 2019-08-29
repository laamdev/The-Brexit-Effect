
import React, { Component } from 'react'
import AuthServices from '../../services/auth.services'
import { Container } from 'react-bootstrap'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            imageURL: '',
            money: 0,

        }
        this.authServices = new AuthServices()
    }
    

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        this.authServices.login(username, password)
            .then(theLoggedUser => {
                this.setState({
                    username: '',
                    password: ''
                })
                console.log(this.props)
                this.props.setUser(theLoggedUser)
            })
            .catch(err => console.log(err.response.data.message))
    }



    render() {
        return (
            <Container>
                <form onSubmit={this.handleFormSubmit}>
                    Username: <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} /> <br></br>
                    Password: <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br></br>
                    <input className="login-butt" type="submit" value="Submit" />
                </form>
            </Container>

        )
}
}

export default Login

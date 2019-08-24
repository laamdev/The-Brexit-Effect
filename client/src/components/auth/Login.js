import React, { Component } from 'react'
import AuthServices from '../../services/auth.services'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            imageURL: '',
            money: 0

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
                this.props.setUser(theLoggedUser)
                this.props.history.push('/dashboard')
            })
            .catch(err => console.log(err.response.data.message))
    }

    render() {

        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.handleFormSubmit}>
                    Username: <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} /> <br></br>
                    Password: <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br></br>

                    <input type="submit" value="Login" />
                </form>
            </div>

        )
    }
}

export default Login
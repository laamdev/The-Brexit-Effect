import React, { Component } from 'react'
import AuthServices from '../../services/auth.services'

class Signup extends Component {

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
        console.log(this.state)
    }

    handleFormSubmit = e => {
        e.preventDefault()
        
        // const uploadData = new FormData();
        // uploadData.append("imageURL", e.target.files[0]);
        console.log(this.state)

        const { username, password, imageURL, money } = this.state
        this.authServices.signup(username, password, imageURL, money)
            .then(theNewUser => {
                this.setState({
                    username: '',
                    password: '',
                    imageURL: String,
                    money: 0
                })
                this.props.setUser(theNewUser)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    handleFileUpload = e => {
        const uploadData = new FormData();
        uploadData.append("imageURL", e.target.files[0]);
        this.authServices.handleUpload(uploadData)
            .then(response => {
               
                this.setState({ imageURL: response.data.secure_url })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>

                    User: <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} /> <br></br>

                    Password: <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br></br>

                    Image: <input name="imageURL" id="input-img" type="file" onChange={this.handleFileUpload} /> <br></br>

                    Money: <input name="money" type="number" value={this.state.money} onChange={this.handleInputChange} /> <br></br>

                    

                    <input type="submit" value="Submit" />
                </form>
            </div>

        )
    }
}

export default Signup
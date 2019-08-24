import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    signup = (username, password, imageURL, money) => this.service.post('signup', { username, password, imageURL, money })
    login = (username, password) => this.service.post('login', { username, password })
    logout = () => this.service.post('logout')
    loggedin = () => this.service.get('loggedin')
    handleUpload = theFile => this.service.post('upload', theFile)
}
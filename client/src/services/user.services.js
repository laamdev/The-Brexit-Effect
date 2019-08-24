import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getUser = id => this.service.get(`profile/${id}`)
}
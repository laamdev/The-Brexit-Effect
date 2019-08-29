import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}`,
            withCredentials: true
        })
    }

    postConversion = (conversion, user) => {
        return this.service.post(`addConversion`, {conversion, user})
    }
        
    deleteConversion = (conversion, user) => {
        return this.service.post(`deleteConversion`, {conversion, user})
    }
    
    getAllConversions = () => this.service.get(`getAllConversions`)
}
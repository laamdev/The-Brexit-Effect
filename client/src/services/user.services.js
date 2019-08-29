import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}`,
            withCredentials: true
        })
    }

    postConversion = (conversion, user) => {
        console.log(conversion)
        return this.service.post(`addConversion`, {conversion, user})}


    getAllConversions = () => this.service.get(`getAllConversions`)


}
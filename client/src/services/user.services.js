import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}`,
            withCredentials: true
        })
    }

    getAllConversions = () => this.service.get(`getAllConversions`)

    postConversion = (result, fromCurrency, toCurrency, amount) => this.service.post(`addConversion`, {result, fromCurrency, toCurrency, amount})

    deleteConversion = (_id) => this.service.post(`/:id/deleteConversion`, {_id})



}
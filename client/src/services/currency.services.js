import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: "https://api.exchangeratesapi.io/"
        });
    }

    //!ENDPOINTS FOR API CALLS
    getLatestCurrency = () => this.service.get(`latest?base=GBP&symbols=USD,EUR,CNY,CHF,AUD`);

    getHistoricalCurrency = () => this.service.get(`history?start_at=2016-08-23&end_at=2016-08-29&symbols=GBP`)


    //getOneCoaster = id => this.service.get(`getOneCoaster/${id}`);
    //postCoaster = theNewCoaster => this.service.post(`postCoaster`, theNewCoaster);
}

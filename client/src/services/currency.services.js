import axios from "axios";

export default class Services {
  constructor() {
    this.state = {updatedDate: ""}
    this.service = axios.create({
      baseURL: "https://api.exchangeratesapi.io/"
    });
  }


  //!ENDPOINTS FOR API CALLS
  getLatestCurrency = () => this.service.get(`latest?base=GBP&symbols=USD,EUR,CNY,CHF,AUD`);

  getHistoricalCurrency = () => this.service.get(`history?start_at=2016-06-23&end_at=2016-06-29&symbols=GBP`);

  //getOneCoaster = id => this.service.get(`getOneCoaster/${id}`);
  //postCoaster = theNewCoaster => this.service.post(`postCoaster`, theNewCoaster);
}


// getHistoricalCurrency = () => {
    
//   // let todayDate = new Date().toISOString().slice(0,10);


//   // this.setState = ({updatedDate: todayDate})


//   // this.service.get(`history?start_at=2016-06-23&end_at=${this.state.updatedDate}&symbols=GBP`);
//   this.service.get(`history?start_at=2016-06-23&end_at=2016-06-29&symbols=GBP`);


import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "https://newsapi.org/v2/"
    });
  }

  //!ENDPOINTS FOR API CALLS
  getLatestNews = () => this.service.get(`top-headlines?q=brexit&country=gb&apiKey=041cff11d05448a3a8506f81a8893422`);

  //getOneCoaster = id => this.service.get(`getOneCoaster/${id}`);
  //postCoaster = theNewCoaster => this.service.post(`postCoaster`, theNewCoaster);
}

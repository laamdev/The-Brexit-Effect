import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "https://newsapi.org/v2/"
    });
  }

  //!ENDPOINTS FOR API CALLS
  getLatestNews = () => this.service.get(`top-headlines?q=brexit&language=en&apiKey=041cff11d05448a3a8506f81a8893422`);

}

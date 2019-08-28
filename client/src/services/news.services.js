import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "https://newsapi.org/v2/"
    });
  }

  //!ENDPOINTS FOR API CALLS
  getLatestNews = () => this.service.get(`top-headlines?q=brexit&language=en&apiKey=${process.env.REACT_APP_NEWS}`);

}

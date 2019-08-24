import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: "https://newsapi.org/v2/"
        });
    }

    //!ENDPOINTS FOR API CALLS
    getLatestNews = () => this.service.get(`top-headlines?q=brexit&country=gb&apiKey=a8d0b458b1b94d5786e4de567d820f3d` , ) 

    //getOneCoaster = id => this.service.get(`getOneCoaster/${id}`);
    //postCoaster = theNewCoaster => this.service.post(`postCoaster`, theNewCoaster);
}

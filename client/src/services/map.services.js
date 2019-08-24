// import React, { Component } from "react"
import axios from "axios";
// import Map from "../components/Map"

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: "https://maps.googleapis.com/maps/api/place/nearbysearch/"
        });
    }

    // getExchangeBureaus = (lat, lng) => this.service.get(`json?location=${lat},${lng}&radius=500&type=restaurant&keyword=cruise&key=AIzaSyCZuNBG8NOSNXtQupNci1h9B52XS0C5fBA/`);

    getExchange = () => this.service.get(`json?location=40.416775,-3.703790&radius=500&type=restaurant&keyword=cruise&key=AIzaSyCZuNBG8NOSNXtQupNci1h9B52XS0C5fBA/`);


}

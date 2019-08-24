import React, { Component } from 'react'
import Services from '../../../services/currency.services'
import '../App.css';

class ChartFile extends Component {
    constructor() {
        super()
        this.state = { historicalCurrency: ^ }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getHistoricalCurrency()
            .then(response => this.setState({ historicalCurrency: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        if (this.state.latestExchange) {

            return (
                <>
                    <div className="container">
                        <div className="row justify-content-center card">
                            <h1>{this.state.historicalCurrency.rates.GBP}</h1>
                            <h2>{this.state.historicalCurrency.date}</h2>
                        </div>
                    </div>
                </>
            )
        } else {
            return (

                <p>Processing</p>
            )
        }
    }
}
export default ChartFile

// { this.state.apuesta && this.state.apuesta.map((apuesta, idx) => <ApuestaCard key={idx} {...apuesta} />) }

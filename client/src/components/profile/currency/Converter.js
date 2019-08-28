import React, { Component } from "react";
import axios from "axios";
import '../../../styles/converter.css';
import Services from '../../../services/user.services'
import { Button } from 'react-bootstrap'

class Converter extends Component {
    constructor(props){
        super(props)
        this.state = {
            result: null,
            fromCurrency: "GBP",
            toCurrency: "EUR",
            amount: null,
            currencies: [],
        };
        this.service= new Services()
    }
   

    // Initializes the currencies with values from the api
    componentDidMount() {
        axios
            .get("https://api.exchangeratesapi.io/latest?base=GBP&symbols=USD,EUR,CNY,CHF,AUD")
            .then(response => {
                const currencyAr = ["GBP"]
                for (const key in response.data.rates) {
                    currencyAr.push(key)
                }
                this.setState({ currencies: currencyAr.sort() })
            })
            .catch(err => {
                console.log("Opps", err.message);
            });
    }

    convertHandler = () => {
        if (this.state.fromCurrency !== this.state.toCurrency && this.state.amount > 0) {
            axios
                .get(`https://api.exchangeratesapi.io/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
                .then(response => {
                    const result = this.state.amount * (response.data.rates[this.state.toCurrency]);
                    this.setState({ result: result.toFixed(3) })

                })
                .catch(err => {
                    console.log("Opps", err.message);
                });

        } else {
            this.setState({ result: "Enter valid amount / currency "})
   
            
        }
    }



    selectHandler = (event) => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value, result: null })
        }
        if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value, result: null })
        }
    }

    postConversion = () => {
        this.services
        .postConversion()
        .then(response => this.setState({ currencies: response.data }))
        .catch(err => console.log(err));
    
      }
    

    
    render() {
        return ( 
            <div className="Converter">
                <div className="Form">
                    <input
                        name="amount"
                        placeholder="Enter amount"
                        type="text"
                        value={this.state.amount}
                        onChange={event =>
                            this.setState({ amount: event.target.value, result: null  })
                        }
                    />
                    <select
                        name="from"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.fromCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <select
                        name="to"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.toCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    
                    //!CONVERT BUTTON
                    <Button onClick={this.convertHandler}>Convert</Button>

                    //!SAVE BUTTON
                    <Button onClick={()=> this.service.postConversion(this.state.result, this.state.fromCurrency, this.state.toCurrency, this.state.amount)} className="btn btn-dark btn-md">Save</Button>



                </div>

                <div>

                {this.state.result && 
                
                <h1>{this.state.result}</h1> 
                
                }
                


                </div>


            </div>
        );
    }
}

export default Converter;

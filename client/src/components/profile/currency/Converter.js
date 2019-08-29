import React, { Component } from "react";
import axios from "axios";
import Services from '../../../services/user.services'
import { Button, Container, Col, Row } from 'react-bootstrap'

class Converter extends Component {
    constructor(props){
        super(props)
        this.state = {
            result: null,
            fromCurrency: "GBP",
            toCurrency: "EUR",
            amount: null,
            currencies: [],
            conversionList: []
        };
        this.services = new Services()
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
        console.log(this.props.userInSession)
        this.services
        .postConversion(this.state, this.props.userInSession)
        .then(response => {
            this.setState({ conversionList: response.data })
            
            this.refreshConversionList();

            this.props.history.push("/profile")})

        .catch(err => console.log(err));
    
      }

      handleSubmit = e => {
          e.preventDefault()
          const { 
            result,
            fromCurrency,
            toCurrency,
            amount,
            currencies} = this.state

          this.services.postConversion( 
            result,
            fromCurrency,
            toCurrency,
            amount,
            currencies)

            .then(theNewConversion => {console.log(theNewConversion)})
      }

      refreshConversionList = () => {
        this.props.getConversionList();
      }


    
    render() {
        return ( 
            <Container>
                <Row >
                    <div className="Converter">
                        <form onSubmit={this.handleSubmit} className="convert-container">
                            <input
                                name="amount"
                                placeholder="Enter amount"
                                type="number"
                                value={this.state.amount}
                                onChange={event =>
                                    this.setState({ amount: event.target.value, result: null  })
                                }
                            />
                            <div className="currencies-container">
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
                            </div>
                            <div className="save-container">
                                <Button onClick={this.convertHandler} className="btn btn-dark btn-md convert-button">Convert</Button>

                                <Button type="submit" onClick={()=> this.postConversion()} className="btn btn-dark btn-md save-button">Save</Button>
                            </div>
                        </form>
                    </div>
                </Row>

                <Row className="justify-content-center" style = {{paddingTop: 20}}>
                    {this.state.result && <h3 className="result">{this.state.result}</h3>}
                </Row>

                


            </Container>

        );
    }
}

export default Converter;

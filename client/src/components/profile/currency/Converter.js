import React, { Component } from "react";
import Services from "../../../services/currency.services";
import AuthServices from "../../../services/auth.services";


class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = { latestExchange: null };
    this.services = new Services();
    this.authServices = new AuthServices();

  }

  componentDidMount() {
    this.services
      .getLatestCurrency()
      .then(response => this.setState({ latestExchange: response.data }))
      .catch(err => console.log(err));
  }


  render() {
    if (this.state.latestExchange) {
        return (
            <>
                 <p> Today 1 euro equals: {this.state.latestExchange.rates.EUR.toFixed(3)}</p>

                 <p>Your capital in Euros is: {this.props.capital}</p>

                 <small>Your capital in Pounds is: {(this.state.latestExchange.rates.EUR * this.props.capital).toFixed(3)}
                 </small>
            </>
            )
    }else{
    return <p>Processing</p>;
  }
}
}
   
export default Converter;

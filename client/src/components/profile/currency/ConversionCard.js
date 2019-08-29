import React, { Component } from 'react'
import Services from "../../../services/user.services";

class ConversionCard extends Component {
    constructor(props) {
      super(props);
      this.service = new Services();
    }

    deleteConversion = () => {
      this.service.deleteConversion(this.props._id, this.props.user);

      this.refreshConversionList();
    }

    refreshConversionList = () => {
      this.props.getConversionList();
    }
  
  render() {
  
    return (
      <article className="conversion-card">
        <div>
          <h5>{this.props.amount} {this.props.fromCurrency}</h5>
          <a>Gets you</a>
          <h5>{this.props.result} {this.props.toCurrency}</h5>
        </div>
        <h6 className="conversion-date">{this.props.createdAt.slice(0, 10)}</h6>

        <button className="delete-button" onClick={this.deleteConversion}></button>
      </article>
    )
  }
}

export default ConversionCard

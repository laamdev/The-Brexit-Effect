import React, { Component } from 'react'
import Services from "../../../services/user.services";


class ConversionCard extends Component {
    constructor(props) {
      super(props);
      this.service = new Services();
    }
  

onDelete = (id) => {
    this.service
    .deleteConversion(id)
    .then(console.log('hola'))
    .catch(err=>console.log('Error', err))
  }

  
  render() {
  
    return (
        
        <div className="col-md-3">
            <article className="conversion-card">
            <p>If you change </p>
            <hr></hr>
                <h5>{this.props.amount} {this.props.fromCurrency}</h5>
                <hr></hr>
                <p >on </p>
                <h6>{this.props.createdAt.slice(0, 10)}</h6>
                <hr></hr>
                <p >you get </p>
                <h4> {this.props.result} {this.props.toCurrency}</h4>

                <button  onClick={this.onDelete(this.props._id)} className="btn btn-dark btn-md">Delete</button>
                
                <hr></hr>

            </article>
        </div >
    )
}
}

export default ConversionCard

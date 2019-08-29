import React, { Component } from 'react'
import Services from "../../../services/user.services";
import { Button } from "react-bootstrap"


class ConversionCard extends Component {
    constructor(props) {
      super(props);
      this.service = new Services();
    }
  

// onDelete = (id) => {
//     this.service
//     .deleteConversion(id)
//     .then(console.log('hola'))
//     .catch(err=>console.log('Error', err))
//   }

  
  render() {
  
    return (
      <div className="col-md-4">

            <article className="conversion-card">
            <p>If you change </p>
                <h5><b>{this.props.amount} {this.props.fromCurrency}</b></h5>
                <hr></hr>
                <p >on </p>
                <h6><b>{this.props.createdAt.slice(0, 10)}</b></h6>
                <hr></hr>
                <p >you get </p>
                <h5><b>{this.props.result} {this.props.toCurrency}</b></h5>

                {/* <Button  onClick={this.onDelete(this.props._id)} >Delete</Button> */}
                
                <hr></hr>

            </article>
            </div>

    )
}
}

export default ConversionCard

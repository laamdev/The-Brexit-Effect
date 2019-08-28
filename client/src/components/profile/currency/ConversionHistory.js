import React, { Component } from "react";

import Services from "../../../services/user.services";

import ConversionCard from "../currency/ConversionCard";


class ConversionHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { conversionList: [] };
    this.service = new Services();
  }

  componentDidMount = () => {
    this.showList()
  } 

  showList = () => {
    this.service
    .getAllConversions()
    .then(response => this.setState({ conversionList: response.data }))
    .catch(err => console.log(err));

  }


  render() {
  
    return (
      <>
      

        <div className="container">

        {this.state.conversionList.map((conversion) => (

        <ConversionCard key={conversion._id} {...conversion}   />
        
        )

        )}

        
        </div>

      </>
        
    );
  }
}

export default ConversionHistory;

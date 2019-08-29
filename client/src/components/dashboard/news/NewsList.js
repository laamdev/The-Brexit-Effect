import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

import Services from "../../../services/news.services";

import axios from 'axios';

 
class NewsList extends Component {
  constructor() {
    super();
    this.state = { news: [] };
    this.services = new Services();
  }

  componentDidMount = () => this.renderList();

  test(e) {
    axios.get(`https://newsapi.org/v2/everything?language=en&q=brexit&from=${e.target.value}&to=${e.target.value}&sortBy=popularity&apiKey=041cff11d05448a3a8506f81a8893422`).then(res => this.setState({ news: res.data.articles }));
  }

  renderList = () => {
    this.services
      .getLatestNews()
      .then(response => {
        this.setState({ news: response.data.articles });
        console.log(this.state.news);
      })
      .catch(err => console.log(err));
  };



render() {

  return (

    <div className="carrousel-container">
      <input type="date" id="start" name="trip-start" min="2019-08-10" max="2019-08-30" onChange={(e) => this.test(e)}></input>
      <Carousel className="news-carousel" showStatus={false} >
        {this.state.news.map((article) => (
          <>
            <h5 className="news-title">{article.title}</h5>      
            <p className="legend">
            {article.description}
            <br></br>
            <a href={article.url} target="_blank">Read More</a>
            </p>
            <img className="d-block w-100"
            src={ article.urlToImage == "" || article.urlToImage == null  ? "https://cdn.urgente24.com/sites/default/files/2019-08/boris_4.jpg" : article.urlToImage }
            alt="News Slide"/>
          </>
        ))
        }
      </Carousel>
    </div>
  )
}
}
 
export default NewsList;
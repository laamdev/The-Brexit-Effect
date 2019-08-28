import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'pure-react-carousel/dist/react-carousel.es.css';

import Carousel from 'react-bootstrap/Carousel';

import NewsCard from "./NewsCard";
import Services from "../../../services/news.services"
 
class NewsList extends Component {
  constructor() {
    super();
    this.state = { news: [] };
    this.services = new Services();
  }

  componentDidMount = () => this.renderList();

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
    <Carousel fade="true">
    
    {this.state.news.map((article) => (
    <Carousel.Item key={article._id} className="carousel-item">
      <img 
        src={article.urlToImage}key
        alt="News Slide"
        className = "news-slide-images"
      />
      <Carousel.Caption>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url}>Read More</a>

      </Carousel.Caption>
    </Carousel.Item>
                ))}

  </Carousel>
  )
}
}
 
export default NewsList





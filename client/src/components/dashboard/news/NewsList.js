import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

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


                ))}

  </Carousel>


  )
}
}
 
export default NewsList





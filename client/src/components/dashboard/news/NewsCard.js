import React from "react";

import "../../../styles/news-card.css";

const NewsCard = ({ title, description, url, urlToImage }) => {
  return (
    <div className="col-md-3">
      <article className="news-card">
        <img src={urlToImage} alt={title} />
        <h4>{title}</h4>
        <hr></hr>
        <a href={url} className="btn btn-sm btn-dark">
          Read more
        </a>
        <p>{description}</p>
      </article>
    </div>
  );
};

export default NewsCard;

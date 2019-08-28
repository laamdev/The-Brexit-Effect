import React from "react";


const NewsCard = ({ title, description, url, urlToImage }) => {
  return (
    <div>
      <article className="news-card">
        <img src={urlToImage} alt={title}></img>
        <div className="news-text">
        <p>{title}</p>
        <hr></hr>
        <a href={url} className="btn btn-sm btn-dark">
          Read more
        </a>
        </div>
        <p>{description}</p>
      </article>
    </div>
  );
};

export default NewsCard;

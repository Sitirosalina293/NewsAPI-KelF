import React from "react";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <img src={urlToImage} alt="News Image" />
            <div className="card-body">
              <h3 className="card-title">
                <a href={url}>{title}</a>
              </h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

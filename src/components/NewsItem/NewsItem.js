import React from "react";

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="card card-body h-100">
            <img className="imgCard card-img-top" src={urlToImage} alt="News Image"/>
            <div className="card-body">
                <h5 className="card-title"><a href={url}>{title}</a></h5>
                <p className="card-text">{description}</p>
            </div>
            <div className='d-flex p-3'>
                <button className='m-2 py-2 px-4'><a href={url}>News</a></button>
                <button className='m-2 py-2 px-4 border-none'>Save</button>
            </div>
        </div>
    );
};

export default NewsItem;

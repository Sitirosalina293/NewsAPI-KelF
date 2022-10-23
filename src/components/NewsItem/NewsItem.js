import React from "react";
import './newsItem.css';

const NewsItem = ({ title, description, url, urlToImage, onClick, buttonName }) => {
    return (
        <div className="card card-body h-100">
            <img className="imgCard card-img-top" src={urlToImage} alt="News Image"/>
            <div className="card-body">
                <h5 className="card-title"><a className="link" href={url}>{title}</a></h5>
                <p className="card-text">{description}</p>
            </div>
            <div className='d-flex'>
                <button className='cardButton mx-2 py-2 px-4'><a className="link" href={url}>Read</a></button>
                <button className='cardButton mx-2 py-2 px-4 border-none' onClick={onClick}>{buttonName}</button>
            </div>
        </div>
    );
};

export default NewsItem;

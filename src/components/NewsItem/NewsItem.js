import React from 'react'

const NewsItem=({title, description, url, urlToImage})=> {
    return(
        <div>
            <img src={urlToImage} alt="News Image"/>
            <h3>
                <a href={url}>{title}</a>
            </h3>
            <p>{description}</p>
        </div>
    );
}

export default NewsItem

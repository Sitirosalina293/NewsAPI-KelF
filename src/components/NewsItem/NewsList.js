import React from 'react'
import useAPI from "../../components/API/getAPI";
import NewsItem from "./NewsItem"

export default function NewsList(req) {
    const {articles} = useAPI(req)
    return (
        <div className='container'>
            {articles?.map(({title, description, url, urlToImage}) =>(
                <NewsItem 
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}
                />
            ))}
        </div>
    )
}

import React from 'react'
import useAPI from "../../components/API/getAPI";
import NewsItem from "./NewsItem"

export default function NewsList(req) {
    const {articles} = useAPI(req)
    return (
        <div className='container'>
            <div className="row">
                {articles?.map(({title, description, url, urlToImage}) =>(
                    <div class="col-md-4 py-2">
                        <NewsItem 
                            title={title}
                            description={description}
                            url={url}
                            urlToImage={urlToImage}
                            />
                    </div>
                ))}
            </div>
        </div>
    )
}

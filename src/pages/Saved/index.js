import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addToSaved, removeFromSaved } from '../../features/savedSlice';

import NewsItem from '../../components/NewsItem/NewsItem';
import Spinners from '../../components/spiner'

function Saved() {
  const dispatch = useDispatch()

  const savedNews = useSelector((state) => state.saved.savedNews)
  const loading = useSelector((state) => state.saved.loading)

  const handleAddToSaved = (item) => {
    dispatch(addToSaved(item))
  }
  const handleRemoveFromSaved = (item) => {
    dispatch(removeFromSaved(item))
  }

  return (
    <>
        {savedNews.length === 0 ? (
          <div className='container'>
            No News Saved
          </div>
        ) : (
          <div className='container'>
          <div className="row">
            {savedNews.map((news, index) => (
              <div class="col-md-4 py-2">
                <NewsItem
                  url={news?.url}
                  urlToImage={news?.urlToImage}
                  key={index}
                  title={news?.title}
                  description={news?.description}
                  onClick={() => {
                    savedNews.find((item) => item.title === news.title)
                      ? handleRemoveFromSaved(news)
                      : handleAddToSaved(news)
                  }}
                  buttonName={
                    savedNews?.find((item) => item.title === news.title) ? (
                      'Unsave'
                    ) : (
                      'Save'
                    )
                  }
                />
              </div>
            ))}
            </div>
          <div>{loading && <Spinners/>}</div>
        </div>
        )}
    </>
  )
}

export default Saved
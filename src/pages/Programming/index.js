import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData} from '../../features/programmingSlice'


import NewsItem from '../../components/NewsItem/NewsItem';
import { addToSaved, removeFromSaved } from '../../features/savedSlice';
import Spinners from '../../components/spiner'

const Programming =()=>{
  const dispatch = useDispatch()

  const News = useSelector((state) => state.programming.article)
  const loading = useSelector((state) => state.programming.loading)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const savedNews = useSelector((state) => state.saved.savedNews)

  const handleAddToSaved = (item) => {
      dispatch(addToSaved(item))
  }
  const handleRemoveFromSaved = (item) => {
      dispatch(removeFromSaved(item))
  }

  return (
    <div className='container'>
      <div className="row">
        {News.map((news, index) => (
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
  );
}

export default Programming;

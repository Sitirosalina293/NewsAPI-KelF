import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData} from '../../features/homeSlice';

import NewsItem from '../../components/NewsItem/NewsItem';
import { addToSaved, removeFromSaved } from '../../features/savedSlice';
import Spinners from '../../components/spiner'

function Home() {
  const dispatch = useDispatch()

  const News = useSelector((state) => state.home.article)
  const loading = useSelector((state) => state.home.loading)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const saved = useSelector((state) => state.saved.savedNews)

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
          <div key={index} className="col-md-4 py-2">
            <NewsItem
              url={news?.url}
              urlToImage={news?.urlToImage}
              title={news?.title}
              description={news?.description}
              onClick={() => {
                saved.find((item) => item.title === news.title)
                  ? handleRemoveFromSaved(news)
                  : handleAddToSaved(news)
              }}
              buttonName={
                saved?.find((item) => item.title === news.title) ? (
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

export default Home;

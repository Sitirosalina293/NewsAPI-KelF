import NewsItem from '../../components/NewsItem/NewsItem';
import { useDispatch, useSelector } from 'react-redux';
import { addToSaved, removeFromSaved } from '../../features/savedSlice';
import Spinners from '../../components/spiner';

const SearchDetail = () => {

  const dispatch = useDispatch()

  const allNews = useSelector((state) => state.search.article)
  const loading = useSelector((state) => state.search.loading)
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
        {allNews.map((news, index) => (
          <div className="col-md-4 py-2">
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
export default SearchDetail

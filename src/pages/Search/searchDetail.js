import NewsList from '../../components/NewsItem/NewsList'
import { useParams } from "react-router-dom";

const SearchDetail = () => {
  let params = useParams();
  let request = params.input;
  return (
    <div>
      { NewsList({req:(`everything?q=${request}`)})}
    </div>
  )
}
export default SearchDetail

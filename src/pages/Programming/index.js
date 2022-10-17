import NewsList from "../../components/NewsItem/NewsList";

const Programming =()=>{
  return NewsList({req:'everything?q=programming&from=2022-09-14&sortBy=publishedAt&pageSize=21'});
}

export default Programming;

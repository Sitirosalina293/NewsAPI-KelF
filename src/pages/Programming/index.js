import NewsList from "../../components/NewsItem/NewsList";

const Programming =()=>{
  const news = NewsList({req:'everything?q=programming&from=2022-09-14&sortBy=publishedAt'})
  return news;
}

export default Programming;

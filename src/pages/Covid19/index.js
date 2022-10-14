import NewsList from "../../components/NewsItem/NewsList";

const covid=()=>{
  const news = NewsList({req:'everything?q=covid&from=2022-09-14&sortBy=publishedAt'})
  return news;
}

export default covid;

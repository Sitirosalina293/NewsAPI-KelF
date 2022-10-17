import NewsList from "../../components/NewsItem/NewsList";

const covid=()=>{
  return NewsList({req:'everything?q=covid&from=2022-09-14&sortBy=publishedAt'});
}

export default covid;

import NewsList from "../../components/NewsItem/NewsList";

const Home=()=>{
  const news = NewsList({req:'top-headlines?country=id'})
  return news;
}

export default Home;

import NewsList from "../../components/NewsItem/NewsList";

const Home=()=>{
  return NewsList({req:'top-headlines?country=id&pageSize=21'});
}

export default Home;

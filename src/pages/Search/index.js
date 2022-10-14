import NewsList from "../../components/NewsItem/NewsList";

const Cari=(req)=>{
  const news = NewsList({req:('everything?'+req)})
  return news;
}

export default Cari;

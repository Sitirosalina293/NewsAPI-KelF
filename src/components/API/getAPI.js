import { useState, useEffect } from "react";
import axios from "axios";

function useAPI({ req }) {
  const [data, setData] = useState([]);
  const API = `https://newsapi.org/v2/${req}&apiKey=4ab931f6258b49e68ce90f5bf98424cb`;

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(API);
      setData(res.data);
      console.log(res);
    };
    getPosts();
  });

  return data;
}

export default useAPI;

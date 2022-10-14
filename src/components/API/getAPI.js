import { useState, useEffect } from "react";
import axios from "axios";

function useAPI({req}) {
  const [data, setData] = useState([]);
  const API = `https://newsapi.org/v2/${req}&apiKey=f43e5a31e9d3423790cf1bd8691fb739`;

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
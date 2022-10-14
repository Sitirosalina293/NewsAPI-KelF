import { useState, useEffect } from "react";
import axios from "axios";

function useAPI({req}) {
  const [data, setData] = useState([]);
  const API = `https://newsapi.org/v2/${req}&pageSize=21&apiKey=7ff8d9ccb1354e778cd29a24d4957321`;

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
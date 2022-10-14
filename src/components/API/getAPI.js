import { useState, useEffect } from "react";
import axios from "axios";

function useAPI({ req }) {
  const [data, setData] = useState([]);
  const API = `https://newsapi.org/v2/${req}&pageSize=21&apiKey=22c564d24253471baef0baf5adf1d8bb`;

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

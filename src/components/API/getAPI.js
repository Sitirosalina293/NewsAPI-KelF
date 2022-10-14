import { useState, useEffect } from "react";
import axios from "axios";

function useAPI({req}) {
  const [data, setData] = useState([]);
  const API = `https://newsapi.org/v2/${req}&apiKey=abd149c76aed460cae4ce027619714fa`;

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
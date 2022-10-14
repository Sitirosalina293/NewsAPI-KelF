import React from "react";
import { useParams } from "react-router-dom";
import useAPI from "../../components/getAPI";



function Post() {
  
  let params = useParams();
  let items = useAPI();

  let item =
    items.data && items.data.find((item) => item.id === Number(params.itemId));
  return (
    <>
      <div>
        <h1>
          <strong>{item && item.author}</strong>
        </h1>

        <p className='my-5'>
          <strong>{item && item.content}</strong>
        </p>
      </div>
    </>
  );
}

export default Post;
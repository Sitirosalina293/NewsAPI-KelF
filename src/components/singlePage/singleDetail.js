import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PostDetil() {
  
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className='header ps-4 py-2'>
        <p className="pt-2"
          onClick={navigateBack}
        >
          <button className='font-medium text-gray-800'>Back to Home</button>
        </p>
      </div>

      <div className='container mt-5'>
        <Outlet />
      </div>
    </>
  );
}

export default PostDetil;
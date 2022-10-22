import React from "react";
import { Outlet } from "react-router-dom";

function Cari() {

  return (
    <>
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
}

export default Cari;

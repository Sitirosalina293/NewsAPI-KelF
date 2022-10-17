import React, { useState } from 'react';
import '../Navbar/navbar.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const navigateToSearch = () => {
    navigate(`/search/${ input }`, { replace: true });
  };
    return (
    <div className="">
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className='nav-link mx-3'><h3 className='fw-bold'>News App</h3></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className='nav-item'>
              <Link to="/" className='nav-link col2-item m-auto'>Indonesia</Link>
            </li>
            <li className='nav-item'>
              <Link to="/programming" className='nav-link col2-item m-auto'>Programming</Link>
            </li>
            <li className='nav-item'>
              <Link to="/covid" className='nav-link col2-item m-auto'>COVID-19</Link>
            </li>
            <li className='nav-item'>
              <Link to="/saved" className='nav-link col2-item m-auto'>Saved</Link>
            </li>
          </ul>
          <div className="d-flex cari my-2">
            <input className="mx-3 my-2" type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search . . ."></input>
            <a onClick={navigateToSearch} className="my-2"><img alt="..." src='https://ik.imagekit.io/10tn5i0v1n/frontend/search_icon.png' height="15" className="d-inline-block align-text-center mx-3"/></a>
          </div>
        </div>
      </nav >
    </div>
  )
}
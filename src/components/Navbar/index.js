import React, { useState } from 'react';
import '../Navbar/navbar.css';
import { Link } from "react-router-dom";
import Cari from "../../pages/Search"

const Header = () => {
  const [input, setInput] = useState('')
  const onInputChange = (event) => {
    setInput(event.target.value)
    if (input!=='')
    {
      <Cari 
      req={input}
      />
    }
}

    return (
    <div className="head2">
      <nav className="header_2 mx-auto navbar sticky-top d-flex">
        <div className='Tag'>
        <Link to="/" className='nav-link'><h3 className='fw-bold'>News App</h3></Link>
        </div>
        <div className="Nvabar col2 nav-item">
          <Link to="/" className='col2-item'>Indonesia</Link>
          <Link to="/programming" className='col2-item mx-4'>Programming</Link>
          <Link to="/covid" className='col2-item'>COVID-19</Link>
          <Link to="/saved" className='col2-item mx-4'>Saved</Link>
        </div>
        <div className="cari ">
          <img alt="..." src='https://ik.imagekit.io/10tn5i0v1n/frontend/search_icon.png' height="15" className="d-inline-block align-text-center mx-3" />
          <input className="my-2" type="text" id="myInput" placeholder="Search . . ." value={input} onChange={onInputChange}></input>
        </div>
      </nav >
    </div>
  )
}

export default Header
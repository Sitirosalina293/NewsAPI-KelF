import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { fetchData } from '../../features/searchSlice';
import { Container,Nav, Navbar } from 'react-bootstrap';
import './navbar.css';

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const navigateToSearch = () => {
    dispatch(fetchData(input))
    navigate(`/search/${ input }`, { replace: true });
  };
    return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/" className='fw-bold'><h3 className='fw-bold'>News App</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={location.pathname} className="me-auto">
            <Nav.Link href="/">Indonesia</Nav.Link>
            <Nav.Link href="/programming">Programming</Nav.Link>
            <Nav.Link href="/covid">COVID-19</Nav.Link>
            <Nav.Link href="/saved">Saved</Nav.Link>
          </Nav>
          <div className="d-flex cari my-2">
            <input className="mx-3 my-2" type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search . . ."></input>
            <a onClick={navigateToSearch} className="my-2">
              <img alt="..." src='https://ik.imagekit.io/10tn5i0v1n/frontend/search_icon.png' height="15" className="d-inline-block align-text-center mx-3"/>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Covid from '../pages/Covid';
import Home from '../pages/Home';
import Programming from '../pages/Programming';
import Saved from '../pages/Saved';
import Cari from '../pages/Search';
import SearchDetail from '../pages/Search/searchDetail';

function Router() {
  return (
    <div className="main-container">
        <NavBar/>
        <div className="main-content">
          <div className="mt-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programming" element={ <Programming /> } />
              <Route path="/covid" element={ <Covid /> } />
              <Route path="/saved" element={ <Saved /> } />
              <Route path="/search" element={ <Cari /> }>
                <Route path=":input" element={<SearchDetail/>}/>
              </Route>
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default Router
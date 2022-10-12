import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import IcSearch from "../../../assets/icons/IcSearch.svg";

function NavBar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="site-wrap">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 d-flex">
              <a href="index.html" className="site-logo">
                News App
              </a>

              <a
                href="#"
                className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
            <div className="col-12 col-lg-6 ml-auto d-flex justify-content-end">
              <form action="#" className="search-form d-inline-block">
                <div className="d-flex">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button type="submit" className="btn btn-secondary">
                    <img src={IcSearch} alt="" />
                  </button>
                </div>
              </form>
            </div>
            <div className="col-6 d-block d-lg-none text-right"></div>
          </div>
        </div>

        <div
          className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
          role="banner"
        >
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="mr-auto">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                    <li className="active">
                      <Link
                        to={{ pathname: "/" }}
                        className={splitLocation[1] === "" ? "active" : ""}
                      >
                        <a href="index.html" className="nav-link text-left">
                          Indonesia
                        </a>
                      </Link>
                    </li>
                    <li>
                      <NavLink
                        to={"programming"}
                        name="programming"
                        style={({ isActive }) => ({
                          color: isActive ? "red" : "black",
                        })}
                      >
                        <a href="#" className="nav-link text-left">
                          Programming
                        </a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"covid"}
                        name="covid"
                        style={({ isActive }) => ({
                          color: isActive ? "red" : "black",
                        })}
                      >
                        <a href="#" className="nav-link text-left">
                          COVID-19
                        </a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"saved"}
                        name="saved"
                        style={({ isActive }) => ({
                          color: isActive ? "red" : "black",
                        })}
                      >
                        <a
                          href="categories.html"
                          className="nav-link text-left"
                        >
                          Saved
                        </a>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/Navbar";
import routes from "./routes";
function Router() {
  return (
    <div className="main-container">
      <NavBar />
      <div className="main-content mt-5">
        <Routes>
          {
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                >
                  {
                    route.children && route.children.map((child, index) => {
                      return (
                        <Route
                          key={index}
                          path={child.path}
                          element={child.element}
                        />
                      )
                    })
                  }
                </Route>
              )
            })
          }
        </Routes>
      </div>
    </div>
  );
}

export default Router;

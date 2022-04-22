import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/elements/logo.svg';

function Navigation() {
  return (
    <div className="navigation header">
    <NavLink className="navbar-brand" to="/">
      <img class="logo header-logo" src={logo} />
    </NavLink>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <div>
            <ul className="navbar-nav ml-auto topMenu">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/swap">
                  Swap
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Lock
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Vote
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
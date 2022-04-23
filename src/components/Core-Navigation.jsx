import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/elements/logo.svg';

function Navigation() {
  return (
    <div class="navigation header">
    <NavLink class="navbar-brand" to="/">
      <img class="logo header-logo" src={logo} />
    </NavLink>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <div>
            <ul class="navbar-nav ml-auto topMenu">
              <li class="nav-item">
                <NavLink class="nav-link" to="/">
                  Home
                  <span class="sr-only"></span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/swap">
                  Swap
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/contact">
                  Lock
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/blog">
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
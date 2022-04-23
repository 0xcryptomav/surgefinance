import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/elements/logo.svg';

function Navigation() {
  return (
    <div class="navigation header">
    <NavLink class="navbar-brand" to="/">
      <img class="logo header-logo" src={logo} />
    </NavLink>
      <nav class="navbar">
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
                <NavLink class="nav-link" to="/">
                  Swap
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/">
                  Discord
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/">
                  Blog
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
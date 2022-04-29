import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/elements/logo.svg";

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
                <a href="https://medium.com/@surgefinance" class="nav-link">
                  Blog
                  <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a href="https://discord.gg/KNnEvURuGS" class="nav-link">
                  Discord
                </a>
              </li>
              <li class="nav-item">
                <a href="https://twitter.com/surge_finance" class="nav-link">
                  Twitter
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://surgefinance.notion.site/surgefinance/Surge-Jobs-1fd24b2c30804372b87a75ae1f2651e0"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

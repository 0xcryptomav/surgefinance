import React from "react";
import { NavLink } from "react-router-dom";
import './Core-Footer.scss';

import logo from '../assets/elements/logo.svg';
import logoTelegram from '../assets/elements/logo-Telegram.svg';
import logoMedium from '../assets/elements/logo-Medium.svg';
import logoGithub from '../assets/elements/logo-Github.svg';

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <div class="flow-row">
            <img class="logo footer-logo" height="40" src={logo} />
          </div>
          <div class="flow-row bottom-line">
            <ul class="community">
              <li class="nav-item">
                <h3>Telegram</h3>
                <NavLink to="/">
                  <p>@surge</p>
                </NavLink>
              </li>
              <li class="nav-item">
                <h3>Twitter</h3>
                <NavLink to="/">
                  <p>@surge_finance</p>
                </NavLink>
              </li>
              <li class="nav-item">
                <h3>Email</h3>
                <NavLink to="/">
                  <p>eam@surgefinance.xyz</p>
                </NavLink>
              </li>
            </ul>
            <ul class="community flow-right">
              <li class="nav-item">
                <NavLink to="/">
                  <h3>Whitepaper</h3>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/">
                  <h3>Community</h3>
                  </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/">
                  <h3>Github</h3>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/">
                  <h3>Whitepaper</h3>
                </NavLink>
              </li>
            </ul>
          </div>
          <div class="flow-row">
            <ul class="footerMenu">
              <li class="nav-item">
                <NavLink class="nav-link" to="/">
                  Legal
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/swap">
                  Terms of service
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/contact">
                  Privacy
                </NavLink>
              </li>
            </ul>
            <ul class="footerMenu flow-right">
              <li class="nav-item ">
                © Copyright Surge Inc 2022, all rights reserved
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
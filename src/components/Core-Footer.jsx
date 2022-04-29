import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Core-Footer.scss";

import logo from "../assets/elements/logo.svg";
import logoTelegram from "../assets/elements/logo-Telegram.svg";
import logoMedium from "../assets/elements/logo-Medium.svg";
import logoGithub from "../assets/elements/logo-Github.svg";

function Footer() {
  const [date, setDate] = useState(new Date().getFullYear());

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
                <a href="https://medium.com/@surgefinance">
                  <h3>Blog</h3>
                </a>
              </li>
              <li class="nav-item">
                <a href="https://discord.gg/KNnEvURuGS">
                  <h3>Discord</h3>
                </a>
              </li>
            </ul>
            <ul class="community flow-right">
              <li class="nav-item">
                <a href="https://twitter.com/surge_finance">
                  <h3>Twitter</h3>
                </a>
              </li>
              <li class="nav-item">
                <a href="https://surgefinance.notion.site/surgefinance/Surge-Jobs-1fd24b2c30804372b87a75ae1f2651e0">
                  <h3>Careers</h3>
                </a>
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
                <NavLink class="nav-link" to="/">
                  Terms of service
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/">
                  Privacy
                </NavLink>
              </li>
            </ul>
            <ul class="footerMenu flow-right">
              <li class="nav-item ">
                © Copyright Surge Inc {date}, all rights reserved
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;

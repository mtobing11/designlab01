import React from "react";
import logo from "../logo02b.png";

// MUI
import AppBar from "@material-ui/core/AppBar";

export default function navbar() {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" className="brand-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

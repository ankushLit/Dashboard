import React from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar({ toggle }) {
  return (
    <header>
      <nav className="nav-header">
        <div onClick={toggle} className="bars">
          <FaBars />
        </div>
        <div className="menu-items">
          <NavLink className="link" to="/" exact>
            Dashboard
          </NavLink>
          <NavLink className="link" to="/employees">
            Employees
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

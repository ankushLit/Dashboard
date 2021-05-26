import React from "react";
import "./Sidebar.css";

import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={"sidebar " + (isOpen ? "sidebar-open" : "sidebar-close")}>
      <div className="icon" onClick={toggle}>
        <FaTimes className="close" />
      </div>

      <div onClick={toggle}>
        <NavLink
          className="link-sidebar"
          activeClassName="active-projects"
          to="/"
          exact
        >
          Dashboard
        </NavLink>
        <NavLink
          className="link-sidebar"
          activeClassName="active-about"
          to="/employees"
        >
          Employees
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

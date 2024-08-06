import React from "react";
import { NavLink } from "react-router-dom";
import './header.css';
import { Stack } from "@mui/material";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "blue",
      fontSize: "25px",
    };
  };

  return (
    <>
    <Stack direction={"column"}>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact="true"
                to="/"
                activeclassname="active"
              >
                {
                  //style={navLinkStyles}
                }
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/bill"
                activeclassname="active"
              >
                Bill
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/report"
                activeclassname="active"
              >
                Report
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/add"
                activeclassname="active"
              >
                Add
              </NavLink>
            </li>

          
          </ul>

          <ul className="nav-list">
          <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/logout"
                activeclassname="active"
              >
                Logout
              </NavLink>
            </li>

          </ul>
        </nav>
      </header>
    
      </Stack>
    </>
  );
};

export default Header;

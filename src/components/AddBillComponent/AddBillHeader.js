import React from "react";
import { NavLink } from "react-router-dom";

const AddBillHeader = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "blue",
    };
  };

  return (
    <>
      <header className="header" style={{paddingTop:"10px"}}>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item" style={{backgroundColor:"black",borderRadius:"10px"}}>
              <NavLink to={"addBill"} className="nav-link">
                {/*  style={navLinkStyle} */}
                Generate Bill
              </NavLink>
            </li>
            <li className="nav-item" style={{backgroundColor:"black",borderRadius:"10px"}}>
              <NavLink to={"addRow"} className="nav-link">
                {/*  style={navLinkStyle} */}
                Add Row
              </NavLink>
            </li>
            <li className="nav-item" style={{backgroundColor:"black",borderRadius:"10px"}}>
              <NavLink to={"addColumn"} className="nav-link">
                Add Column
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default AddBillHeader;

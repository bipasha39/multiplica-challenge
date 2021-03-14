import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header-content">
      <h1 className="rainbow"> 
        <span style={{ color: "red" }}>C</span>
        <span style={{ color: "indigo" }}>o</span>
        <span style={{ color: "blue" }}>l</span>
        <span style={{ color: "violet" }}>o</span>
        <span style={{ color: "green" }}>r</span>
        <span style={{ color: "orange" }}>e</span>
        <span style={{ color: "black" }}>s</span>
      </h1>
    </div>
  );
};
export default Header;

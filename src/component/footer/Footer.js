import React from "react";
import "./footer.css";
const Footer = (props) => {
 
  const handleClick = (e) => {
    props.setCurrentPage(props.currentPage-1)
    
  };
  const handleClick1 =(e)=>{
    props.setCurrentPage(props.currentPage +1)
    console.log(props.currentPage,"click")
    
  }
  return (
    <div className="button-content">
      <div className="button">
        <button type="button" class="btn btn-light" onClick={handleClick}>
        <span style={{ color: "red" }}>‹A</span>
        <span style={{ color: "indigo" }}>n</span>
        <span style={{ color: "blue" }}>t</span>
        <span style={{ color: "violet" }}>e</span>
        <span style={{ color: "green" }}>r</span>
        <span style={{ color: "orange" }}>i</span>
        <span style={{ color: "black" }}>o</span>
        <span style={{ color: "red" }}>r</span>
          {/* ‹Anterior */}
        </button>

        <button type="button" class="btn btn-light" onClick={handleClick1}>
        <span style={{ color: "red" }}>S</span>
        <span style={{ color: "indigo" }}>i</span>
        <span style={{ color: "blue" }}>g</span>
        <span style={{ color: "violet" }}>u</span>
        <span style={{ color: "green" }}>i</span>
        <span style={{ color: "orange" }}>e</span>
        <span style={{ color: "black" }}>n</span>
        <span style={{ color: "red" }}>t</span>
        <span style={{ color: "indigo" }}>e›</span>
          {/* Siguiente› */}
        </button>
      </div>
    </div>
  );
};
export default Footer;

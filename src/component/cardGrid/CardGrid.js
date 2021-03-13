import React from "react";
import Card from "../card/Card";
import "./cardGrid.css";

const CardGrid = (props) => {
  return (
    <div className="card-grid">
<div className="wrapper">
      {props.colors.map((item) => {return <Card item={item} />;})}
    </div>
    </div>
    
  );
};
export default CardGrid;

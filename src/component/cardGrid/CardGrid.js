import React from "react";
import Card from "../card/Card";
import "./cardGrid.css";

const CardGrid = (props) => {
  return (
    <div className="container">
      {props.colors.map((item) => {return <Card item={item} />;})}
    </div>
  );
};
export default CardGrid;

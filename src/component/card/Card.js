import React from "react";
import "./card.css";

const Card = (props) => {

  return (
    <div className="card-content">
      <div>
        <p className="left">{props.item.year}</p>
      </div>

      <div className="color-content">
        <p>{props.item.name}</p>
        <h2>{props.item.color}</h2>
      </div>
      <p className="right">{props.item.pantone_value}</p>
    </div>
  );
};
export default Card;

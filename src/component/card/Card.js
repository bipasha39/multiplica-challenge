import React, { useState } from "react";
import "./card.css";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const [copy, setCopy] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(props.item.color);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  // let history = useHistory();
  // function handleClick(e) {
  //   e.preventDefault();

  //  history.push({
  //   pathname:"/fullcard",
  //    state:{hello:props.item}
  //  });

  // }

  return (
    <div className="card-contents" onClick={handleClick}>
      <div className="card-content">
        <div>
          <p className="left">{props.item.year}</p>
        </div>
        {copy ? (
          <div className="color-content">
            <h2>¡Copiado!</h2>
          </div>
        ) : (
          <div className="color-content">
            <p>{props.item.name}</p>
            <h2>{props.item.color}</h2>
          </div>
        )}
        <div className="right">
          <p>{props.item.pantone_value}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;

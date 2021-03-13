import React from "react";
import './largeCard.css';
import { useLocation } from "react-router-dom";

const LargeCard=(props)=>{
  const location = useLocation();
  async function writeToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error);
    }
  }
  async function handleClick(e) {
    e.preventDefault();
    let copyText = document.querySelector(".hex-color");
    let copyText1 = document.querySelector(".ax-color");
     console.log(copyText.innerText)
     let textClip = await writeToClipboard(copyText.innerText)
     copyText.innerText= "¡Copiado!"
     copyText1.innerText= ""
     };

  return (
    <div>
       
        <div className="large-card" onClick={handleClick}>
          {console.log(location)}
          <div className="card-contents" >
      <div className="card-content">
        <div>
          <p className="left">{location.state.hello.year}</p>
        </div>

        <div className="color-content">
          <p className="ax-color">{location.state.hello.name}</p>
          <h2 className="hex-color">{location.state.hello.color}</h2>
        </div>
        <div className="right">
          <p >{location.state.hello.pantone_value}</p>
        </div>
      </div>
    </div>
        </div>
        
    </div>
  );
}
export default LargeCard;
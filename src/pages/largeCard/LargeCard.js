import React from 'react';
import Card from '../../component/card/Card';
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import './largeCard.css';



const LargeCard=()=>{
    // function copy() {
    //     let copyText = document.querySelector("#input");
    //     copyText.select();
    //     document.execCommand("copy");
    //   }
  return (
    <div>
        <Header />
        <div className="large-card">
        <Card />
        </div>
        <Footer />
    </div>
  );
}
export default LargeCard;
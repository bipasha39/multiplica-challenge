import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import "./App.css";
import CardGrid from "./component/cardGrid/CardGrid";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import LargeCard from "./pages/largeCard/LargeCard";

function App() {
  const [colors, setColors] = useState([]);
  const[currentPage,setCurrentPage]=useState(1);
  const[totalPages,setTotalPages]=useState();
const pageDisplay=(page)=>{
  
  
  let secondPage=  Math.ceil(page*1.5)
  let firstPage= (secondPage - 1)
  console.log(firstPage,"bla")
  console.log(secondPage,"bla bla")
  let firstPageColors
  let secondPageColors
  let finalColorPage


  fetch(`https://reqres.in/api/colors?page=${firstPage}`)
  .then((res) => res.json())
  .then((json) => {
    firstPageColors = json.data;
    setTotalPages(json.total_pages)
    console.log(firstPageColors, "first?page")
  })
  .catch((error) => {
    console.log(error);
  });

  fetch(`https://reqres.in/api/colors?page=${secondPage}`)
  .then((res) => res.json())
  .then((json) => {
    secondPageColors = json.data;
    console.log(secondPageColors, "second page")

    if (page%2 ===0){
      finalColorPage = firstPageColors.slice(3).concat(secondPageColors)
    } 
    else {
      finalColorPage = firstPageColors.concat(secondPageColors.slice(0,3))
    }
    console.log(typeof finalColorPage,"display")
    setColors(finalColorPage)
  })
  .catch((error) => {
    console.log(error);
  });
  
}
  useEffect(() => {
    console.log("Fetching data from color API");
    pageDisplay(currentPage);
  }, [currentPage]);
console.log(totalPages,"pages")
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          
          <Route exact path="/">

            <CardGrid colors={colors} text="hello" />
          </Route>
          <Route path="/fullcard">
            <LargeCard />
          </Route>

         
        </Switch>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
      </div>
    </Router>
  );
}

export default App;

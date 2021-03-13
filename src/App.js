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

  useEffect(() => {
    console.log("Fetching data from color API");

    fetch(`https://reqres.in/api/colors`)
      .then((res) => res.json())
      .then((json) => {
        setColors(json.data);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        <Footer />
      </div>
    </Router>
  );
}

export default App;

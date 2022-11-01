import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NevBar from "./Components/NevBar";
import { horror, romance, action, Netflixs, Comedy } from "./urls";
import "./app.css";
import Banner from "./Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <NevBar />
      <Banner />
      {/* <Rowpost url={Netflixs} title="Netflixs Oginals" Adhil/> */}
      <Rowpost url={horror} title="Horror" Action />
      <Rowpost url={action} title="Actions" Action />
      <Rowpost url={romance} title="Romance" Action />
      <Rowpost url={Comedy} title="Comedy" Action />
      <Router>
        <Route path={"/home"}>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;

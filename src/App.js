import React from "react";
import NevBar from "./Components/NevBar";
import {horror,romance,action, Netflixs,Comedy} from './urls';
import './app.css'
import Banner from "./Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";

function App() {
  return (
    <div className="App">
      <div className="alone">
      <NevBar/>
      </div>
      <Banner/>
      <Rowpost url={Netflixs}  title="Netflixs Oginals"/>
      <Rowpost url={horror}  title="Horror" Action/>
      <Rowpost url={action}  title="Actions" Action/>
      <Rowpost  url={romance} title="Romance" Action/>
      <Rowpost  url={Comedy} title="Comedy" Action/>
      </div>
      
    

    
  
    
  );
}

export default App;

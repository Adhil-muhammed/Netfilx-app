import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./NevBar.css";
function NevBar() {
  return (
    <div className="NevBar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt=""
      />
      <div className="butn">
        <Router>
          <Link to={"/"}>clickmee</Link>
        </Router>
      </div>
    </div>
  );
}

export default NevBar;

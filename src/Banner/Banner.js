import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../Constants/Constants";
import axios from "../axios";
import "./Banner.css";
function Banner() {
  const [Movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        setMovie(
          response.data.results.sort((a, b) => {
            return 0.5 - Math.random();
          })[0]
        );
      });
  }, []);

  return (
    <React.Fragment>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${
            Movie
              ? imageUrl + Movie.backdrop_path
              : "https://png.pngtree.com/png-vector/20211022/ourlarge/pngtree-coming-soon-banner-design-with-speaker-png-image_3999559.png"
          })`,
        }}
      >
        <div></div>
        <div className="content">
          <h1 className="title">
            {" "}
            {Movie ? (Movie.title ? Movie.title : Movie.name) : ""}{" "}
          </h1>
          <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
          </div>
          <div>
            <h1 className="discreption">{Movie ? Movie.overview : " "} </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Banner;

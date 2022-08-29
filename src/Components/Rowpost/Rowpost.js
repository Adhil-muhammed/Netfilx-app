import React, { useEffect, useState } from "react";
import axios from "../../axios";
import YouTube from "react-youtube";
import {} from "../../urls";
import { imageUrl, API_KEY } from "../../Constants/Constants";
import "./Rowpost.css";
function Rowpost(props) {
  const [show, setShow] = useState([]);
  const [UrlId, setUrlId] = useState("");

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results);
      setShow(response.data.results);
    });
  }, []);
  const movie = (np) => {
    setShow(np);
  };
  const movieHandler = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.lenght != 0) {
          setUrlId(response.data.results[8]);
        }
        console.log(response.data.results);
      });
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      disablekb: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {show.map((obj) => (
          <img
            onClick={() => movieHandler(obj.id)}
            className={props.Action ? "sPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>

      {UrlId && <YouTube opts={opts} videoId={UrlId.key} />}
    </div>
  );
}

export default Rowpost;

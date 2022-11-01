import React, { useEffect, useState } from "react";
import axios from "../../axios";
import YouTube from "react-youtube";
import {} from "../../urls";
import { imageUrl, API_KEY } from "../../Constants/Constants";
import "./Rowpost.css";
function Rowpost({Adhil,Action,url,title}) {
  const [show, setShow] = useState([]);
  const [UrlId, setUrlId] = useState("");
  const Callback = () => {};
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.results);
      setShow(response.data.results);
    });
  }, []);

  const movieHandler = async (id) => {
    await axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.lenght !== 0) {
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
    <React.Fragment>
      <div className="row">
        <h2>{title}</h2>
        <div className="posters">
          {show.map((obj) => (
            <img
              key={obj.id}
              onClick={() => movieHandler(obj.id)}
              onDoubleClick={Callback}
              className={Adhil ?  'sposter':'poster'}
              src={`${imageUrl + obj.poster_path}`}
              alt="shit"
            />
           
          ))}

          {UrlId && <YouTube opts={opts} videoId={UrlId.key} />}
        </div>
      </div>
      {/* <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {show.map((obj) => (
            <img
              className={props.Action ? "sPoster" : ""}
              key={obj.id}
              // className={props.Action ? "sPoster" : "poster"}

              src={`${imageUrl + obj.backdrop_path}`}
              alt="oops.."
            />
          ))}

          {UrlId && <YouTube opts={opts} videoId={UrlId.key} />}
        </div>
      </div> */}
    </React.Fragment>
  );
}

export default Rowpost;

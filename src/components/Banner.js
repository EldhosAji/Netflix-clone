import React, { useState, useEffect } from "react";
import axios from "../req/axion";
import request from "../req/request";

const imageUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imageUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_container">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="banner_btns">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My list</button>
        </div>
        <h1 className="banner_desc">{truncate(movie?.overview, 400)}</h1>
      </div>
      <div className="banner_fade"></div>
    </header>
  );
}

export default Banner;

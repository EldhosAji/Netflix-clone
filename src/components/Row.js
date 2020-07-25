import React, { useState, useEffect } from "react";
import axios from "../req/axion";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const imageUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isBanner }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const hanClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const tUrl = new URLSearchParams(new URL(url).search);
          setTrailerUrl(tUrl.get("v"));
        })
        .catch(console.error);
    }
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => hanClick(movie)}
            className={`poster_img ${isBanner && "banner_img"}`}
            src={`${imageUrl}${
              isBanner ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && (
        <YouTube className="vid" videoId={trailerUrl} opts={opts} />
      )}
    </div>
  );
}

export default Row;

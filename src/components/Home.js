import React from "react";
import PropTypes from "prop-types";
import Row from "./Row";
import request from "../req/request";
import Banner from "./Banner";
import Navbar from "./Navbar";
function Home() {
  return (
    <div className="home-bg">
      <Navbar />
      <Banner />
      <Row
        title="Netflix original"
        fetchUrl={request.fetchNetflixOriginals}
        isBanner
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomancemovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default Home;

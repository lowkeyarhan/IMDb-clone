import "../styles/movies.css";
import React from "react";
import Image from "../assets/wallpapersden.com_avengers-endgame-banner_7173x3000.jpg";

function movies() {
  return (
    <div className="parent_container">
      <h1>Trending now</h1>
      <div className="movies_container">
        <div className="movie_card">
          <img src={Image} alt="" />
          <p className="movie_name">Ozark</p>
        </div>
        <div className="movie_card">
          <img src={Image} alt="" />
          <p className="movie_name">Dune</p>
        </div>
        <div className="movie_card">
          <img src={Image} alt="" />
          <p className="movie_name">Oppenheimer</p>
        </div>
        <div className="movie_card">
          <img src={Image} alt="" />
          <p className="movie_name">Intersteller</p>
        </div>
        <div className="movie_card">
          <img src={Image} alt="" />
          <p className="movie_name">House of cards</p>
        </div>
      </div>
    </div>
  );
}
export default movies;

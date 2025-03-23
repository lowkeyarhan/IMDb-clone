import "../styles/movies.css";
import React, { useState, useEffect } from "react";
import Pagination from "./pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // API constants
  const API_KEY = "9179ed80b89b30c42367184efbe93419";
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
  const POSTER_SIZE = "/w500";

  // Function to get image URL
  const getImageUrl = (path) => {
    if (!path) return null;
    return `${IMAGE_BASE_URL}${POSTER_SIZE}${path}`;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`
        );
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages > 500 ? 500 : data.total_pages); // TMDB limits to 500 pages
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchMovies();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="parent_container">
      <h1>Trending now</h1>
      <div className="movies_container">
        {movies.map((movie) => (
          <div className="movie_card" key={movie.id}>
            <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
            <p className="movie_name">{movie.title}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={page}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Movies;

import "../styles/movies.css";
import React, { useState, useEffect } from "react";
import Pagination from "./pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // API constants
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
  const POSTER_SIZE = "/w500";

  // Function to get image URL
  const getImageUrl = (path) => {
    if (!path) return null;
    return `${IMAGE_BASE_URL}${POSTER_SIZE}${path}`;
  };

  // Format the date to a more readable format
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`
        );
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchMovies();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);

    // Scroll to the trending section instead of the top of the page
    const trendingSection = document.getElementById("trending-section");
    if (trendingSection) {
      trendingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="parent_container">
      <h1 id="trending-section">Trending now</h1>
      <div className="movies_container">
        {movies.map((movie) => (
          <div className="movie_card" key={movie.id}>
            <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
            <div className="movie_info">
              <h3>{movie.title}</h3>
              <div className="movie_details">
                <span className="release_date">
                  <i className="release_icon">📅</i>{" "}
                  {formatDate(movie.release_date)}
                </span>
                <span className="rating">
                  <i className="rating_icon">⭐</i>{" "}
                  {movie.vote_average.toFixed(1)}/10
                </span>
              </div>
            </div>
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

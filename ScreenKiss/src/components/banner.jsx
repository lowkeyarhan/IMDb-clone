import "../styles/banner.css";
import React, { useState, useEffect } from "react";

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // API constants
  const API_KEY = "9179ed80b89b30c42367184efbe93419";
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
  const BACKDROP_SIZE = "/w1280";

  // Number of slides to show
  const TOTAL_SLIDES = 6;

  // Function to get image URL
  const getImageUrl = (path) => {
    if (!path) return null;
    return `${IMAGE_BASE_URL}${BACKDROP_SIZE}${path}`;
  };

  useEffect(() => {
    const fetchBannerMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=1`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          // Get the first 6 movies for the slideshow
          setMovies(data.results.slice(0, TOTAL_SLIDES));
        }
      } catch (error) {
        console.error("Error fetching banner movies:", error);
      }
    };

    fetchBannerMovies();
  }, []);

  // Set up slideshow timer
  useEffect(() => {
    if (movies.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(timer); // Clean up timer on component unmount
  }, [movies]);

  // Handle manual slide change when clicking on dots
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (movies.length === 0) return null;

  return (
    <div className="banner_container">
      {/* Display the current slide */}
      <img
        src={getImageUrl(movies[currentSlide].backdrop_path)}
        alt={movies[currentSlide].title}
      />
      <p>{movies[currentSlide].title}</p>

      {/* Dots indicator */}
      <div className="slider_dots">
        {movies.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Banner;

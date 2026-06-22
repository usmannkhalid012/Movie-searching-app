import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

import {
  fetchTrendingMovies,
  fetchMoviesByCategory,
  searchMovies
} from "../api/movies";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadTrending();
  }, []);

  const genreMap = {
    Action: 28,
    Comedy: 35,
    Documentary: 99,
    Romance: 10749,
    Fantasy: 14,
    Horror: 27,
    "Sci-Fi": 878,
  };

  const loadTrending = async () => {
    const data = await fetchTrendingMovies();
    setMovies(data);
  };

  const handleCategorySelect = async (categoryName) => {
    if (categoryName === "Trending") return loadTrending();
    const genreId = genreMap[categoryName];
    if (!genreId) return;
    const data = await fetchMoviesByCategory(genreId);
    setMovies(data.filter(m => m.poster_path));
  };

  const handleSearch = async (query) => {
    if (!query) return loadTrending();
    const data = await searchMovies(query);
    setMovies(data);
  };

  return (
    <div className="bg-light text-dark min-vh-100 pt-5">
      <NavBar 
        onCategorySelect={handleCategorySelect} 
        onSearch={handleSearch}
      />

      <div className="container mt-4">
        <div className="row">
          {movies.map((movie) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
              key={movie.id}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
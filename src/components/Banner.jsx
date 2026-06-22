import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/movies";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await fetchTrendingMovies();
      // pick a random movie each time
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
    };
    loadMovies();
  }, []); // empty dependency array = runs once per page load

  if (!movie) return null;

  return (
    <header
      className="banner text-white d-flex align-items-end p-4"
      style={{
        height: "60vh",
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview?.substring(0, 150)}...</p>
        <button className="btn btn-danger me-2">Play</button>
        <button className="btn btn-outline-light">My List</button>
      </div>
    </header>
  );
}

export default Banner;
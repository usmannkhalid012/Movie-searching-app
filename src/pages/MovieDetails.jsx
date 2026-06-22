import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "4c790b553eea7275c9804f31cf3e30ce";
const BASE_URL = "https://api.themoviedb.org/3";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie)
    return <div className="text-center mt-5 text-dark">Loading...</div>;

  return (
    <div className="container mt-5 text-dark">
      <div className="row">
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title}
            className="img-fluid rounded w-100"
          />
        </div>
        <div className="col-12 col-md-8">
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average} ⭐</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
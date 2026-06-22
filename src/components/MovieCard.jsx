import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {

  const navigate = useNavigate();

  const openDetails = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      className="card bg-dark text-white m-1 w-100"
      style={{
    cursor: "pointer",
    width: "290px",    // set a bigger width
    // optional: taller for better poster
  }}
  onClick={openDetails}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img-top img-fluid"
        alt={movie.title}
      />
      <div className="card-body">
        <h6 className="card-title text-truncate">{movie.title}</h6>
      </div>
    </div>
  );
}

export default MovieCard;
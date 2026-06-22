// // src/components/MovieRow.jsx
// import MovieCard from "./MovieCard";

// function MovieRow({ title, movies }) {
//   return (
//     <div className="mb-4">
//       <h3 className="text-white">{title}</h3>
//       <div className="d-flex overflow-auto">
//         {movies.map((movie) => (
//           <div className="me-3" key={movie.id} style={{ minWidth: "200px" }}>
//             <MovieCard
//               movie={{
//                 title: movie.title,
//                 poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MovieRow;
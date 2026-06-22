import axios from "axios";

const API_KEY = "4c790b553eea7275c9804f31cf3e30ce";

const randomPage = () => Math.floor(Math.random() * 10) + 1;

export const fetchTrendingMovies = async () => {
  const page = randomPage();

  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`
  );

  return response.data.results;
};

export const fetchTopRatedMovies = async () => {
  const page = randomPage();

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`
  );

  return response.data.results;
};

export const fetchActionMovies = async () => {
  const page = randomPage();

  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&page=${page}`
  );

  return response.data.results;
};

export const fetchMoviesByCategory = async (genreId) => {
  const page = Math.floor(Math.random() * 10) + 1; // random page for variety
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
  );
  return response.data.results;
};

export const searchMovies = async (query) => {
  if (!query) return [];

  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );

  return response.data.results;
};
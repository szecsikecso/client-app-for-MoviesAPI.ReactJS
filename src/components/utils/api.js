import axios from "axios";

export const moviesApiPrefix = "api|";
export const moviesApiBaseUrl = "http://localhost:4000";

export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: `${TMDB_API_KEY}`
  },
});

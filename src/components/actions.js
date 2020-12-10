import * as types from "./types";

import axios from "axios";
import { moviesApiBaseUrl } from "./utils/api";

export const movieApiUrl = "/movies";

export const handleMovieClickAction = (id) => (dispatch) => {
    dispatch({ type: types.MOVIE_CLICKED, payload: id });
};

export const fetchApiMovies = (query = "", sort = "", genre = "", history = null) => async (dispatch) => {
    query = query.trim();

    dispatch({ type: types.FETCH_API_MOVIES_INITIATED });
    const offsetPart = "?offset=0";

    let searchPart = "";
    if (genre && genre !== "All") {
        searchPart = `&search=${genre}&searchBy=genres`;
    } else if (query) {
        searchPart = `&search=${query}&searchBy=title`;
    }

    let sortPart = "";
    if (sort) {
        sortPart = `&sortBy=${sort}&sortOrder=desc`;
    }

    const urlAttributes = offsetPart + searchPart + sortPart;

    try {
        const response = await axios.get(moviesApiBaseUrl + movieApiUrl + urlAttributes);

        if (response.data && response.data.data && response.data.data.length > 0) {
            dispatch({ type: types.FETCH_API_MOVIES_SUCCEEDED, payload: response.data.data });
        } else {
            dispatch({ type: types.FETCH_API_MOVIES_EMPTY});
        }

        if (query && genre === "All") {
            history.push(`/search/${query}`);
        } else {
            history.push("/landing");
        }
    } catch (error) {
        dispatch({ type: types.FETCH_API_MOVIES_FAILED });
        console.error("%cAPI Data Fetching Error:", "font-size: 18px", error);
    }
}

export const fetchApiMovie = (movieId = "", history = null) => async (dispatch) => {
    dispatch({ type: types.FETCH_API_MOVIE_INITIATED });

    try {
        const response = await axios.get(moviesApiBaseUrl + movieApiUrl + "/" + movieId);
        dispatch({ type: types.FETCH_API_MOVIE_SUCCEEDED, payload: response.data });

        history.push(`/landing/${movieId}`);
    } catch (error) {
        dispatch({ type: types.FETCH_API_MOVIE_FAILED });
        console.error("%cAPI Data Fetching Error:", "font-size: 18px", error);
    } finally {
        window.scrollTo(0, 0);
    }
}

export const createApiMovie = (values) => async (dispatch) => {
    dispatch({ type: types.CREATE_API_MOVIE_INITIATED });

    const movie = {
        ...values.title && { title: values.title },
        //id: movieId,
        ...values.movieUrl && { poster_path: values.movieUrl },
        //movie_url: values.movieUrl,
        ...values.releaseDate && { release_date: values.releaseDate },
        ...values.overview && { overview: values.overview },
        ...values.runtime && { runtime: parseInt(values.runtime) },

        //genres: [values.genre !== "" ? values.genre : "Unknown"],
        ...values.genre && { genres: values.genre },

        ...values.tagline && { tagline: values.tagline },
        ...values.voteAverage && { vote_average: parseFloat(values.voteAverage) },
        ...values.voteCount && { vote_count: parseInt(values.voteCount) },
        ...values.budget && { budget: parseInt(values.budget) },
        ...values.revenue && { revenue: parseInt(values.revenue) },
    }
    try {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.post(moviesApiBaseUrl + movieApiUrl, movie);
        dispatch({ type: types.CREATE_API_MOVIE_SUCCEEDED, payload: movie });

        try {
            const response = await axios.get(moviesApiBaseUrl + movieApiUrl);
            dispatch({ type: types.FETCH_API_MOVIES_SUCCEEDED, payload: response.data.data });
        } catch (error) {
            dispatch({ type: types.FETCH_API_MOVIES_FAILED });
            console.error("%cAPI Data Fetching Error:", "font-size: 18px", error);
        }
    } catch (error) {
        dispatch({ type: types.CREATE_API_MOVIE_FAILED });
        console.error("%cAPI Data Creating Error:", "font-size: 18px", error);
    }
}

export const updateApiMovie = (movieId, values) => async (dispatch) => {
    dispatch({ type: types.UPDATE_API_MOVIE_INITIATED });

    const movie = {
        ...values.title && { title: values.title },
        id: movieId,
        ...values.movieUrl && { poster_path: values.movieUrl },
        //movie_url: values.movieUrl,
        ...values.releaseDate && { release_date: values.releaseDate },
        ...values.overview && { overview: values.overview },
        ...values.runtime && { runtime: parseInt(values.runtime) },

        //genres: [values.genre !== "" ? values.genre : "Unknown"],
        ...values.genre && { genres: values.genre },

        ...values.tagline && { tagline: values.tagline },
        ...values.voteAverage && { vote_average: parseFloat(values.voteAverage) },
        ...values.voteCount && { vote_count: parseInt(values.voteCount) },
        ...values.budget && { budget: parseInt(values.budget) },
        ...values.revenue && { revenue: parseInt(values.revenue) },
    }
    try {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.put(moviesApiBaseUrl + movieApiUrl, movie);
        dispatch({ type: types.UPDATE_API_MOVIE_SUCCEEDED, payload: movie });

        try {
            const response = await axios.get(moviesApiBaseUrl + movieApiUrl);
            dispatch({ type: types.FETCH_API_MOVIES_SUCCEEDED, payload: response.data.data });
        } catch (error) {
            dispatch({ type: types.FETCH_API_MOVIES_FAILED });
            console.error("%cAPI Data Fetching Error:", "font-size: 18px", error);
        }
    } catch (error) {
        dispatch({ type: types.UPDATE_API_MOVIE_FAILED });
        console.error("%cAPI Data Updating Error:", "font-size: 18px", error);
    }
}

export const deleteApiMovie = (movieId) => async (dispatch) => {
    dispatch({ type: types.DELETE_API_MOVIE_INITIATED });

    try {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.delete(moviesApiBaseUrl + movieApiUrl + "/" + movieId);
        dispatch({ type: types.DELETE_API_MOVIE_SUCCEEDED, payload: movieId });

        try {
            const response = await axios.get(moviesApiBaseUrl + movieApiUrl);
            dispatch({ type: types.FETCH_API_MOVIES_SUCCEEDED, payload: response.data.data });
        } catch (error) {
            dispatch({ type: types.FETCH_API_MOVIES_FAILED });
            console.error("%cAPI Data Fetching Error:", "font-size: 18px", error);
        }
    } catch (error) {
        dispatch({ type: types.DELETE_API_MOVIE_FAILED });
        console.error("%cAPI Data Deleting Error:", "font-size: 18px", error);
    }
}

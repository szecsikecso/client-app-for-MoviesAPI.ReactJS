import React from "react";

import AltPoster from "./posterplaceholder.jpg";
import { convertYear } from "../utils/helpers";
import { MovieContentContainer, MovieImageContainer, MovieImage } from "../utils/styledItemsForMovieDetails";

const MovieDetails = ({ movie }) => {

    if (movie) {
        const { id, title, tagline, poster_path, vote_average, release_date, runtime, overview, details, genres } = movie;

        let properRuntime = runtime;
        let properGenres = genres;
        // Handling different structure of LocalMovies
        if (!runtime && !genres && details && details.runtime && details.genres) {
            properRuntime = details.runtime;
            properGenres = details.genres;
        }

        const convertedYear = convertYear(release_date);
        const convertedRuntime = properRuntime + " min";

        // Handling different structure of ApiMovies
        let imageURL = poster_path;
        if (!poster_path.includes("http")) {
            imageURL = `https://image.tmdb.org/t/p/w780${poster_path}`;
        }

        // Handling different structure of ApiMovies
        const genreString = properGenres.map((genre) => {
            if (genre.name !== undefined) {
                return genre.name;
            }

            return genre;
        }).join(', ');

        return (
            <>
                <MovieImageContainer key={id} data-id={id}>
                    <MovieImage
                        src={poster_path ? imageURL : AltPoster}
                        alt={`${title} poster`}
                    />
                </MovieImageContainer>
                <MovieContentContainer>
                    <h3>
                        {title}
                        <span className="voteNumber">{vote_average}</span>
                    </h3>
                    <h4>{tagline}</h4>
                    <span className="movieNumber yearNumber">{convertedYear}</span>
                    <span className="movieNumber runtimeNumber">{convertedRuntime}</span>
                    <p>{overview}</p>
                    <p className="movieGenres">{genreString}</p>
                </MovieContentContainer>
            </>
        )
    } else {
        return null;
    }

};

export default MovieDetails;

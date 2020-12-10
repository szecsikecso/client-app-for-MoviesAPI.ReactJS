// Helper functions

export const convertGenreNames = (genres) => {
    if (!genres) {
        return "";
    }

    let genreNames = genres;
    if (genreNames[0] && genreNames[0].name !== undefined) {
        genreNames = genres.map((genre) => genre.name);
    }

    if (genreNames.length === 1) {
        return genreNames[0];
    } else if (genreNames.length === 2) {
        return genreNames.join(" & ");
    } else {
        return genreNames.join(", ");
    }
};

export const convertRuntime = (num) => {
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
};

export const convertYear = (release_date) => {
    if (release_date) {
        return release_date.split("-")[0];
    } else {
        return "unknown";
    }
};

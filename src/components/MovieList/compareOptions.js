export const compareById = (a, b) => {
    if (a.id < b.id) {
        return -1;
    } else if (a.id > b.id) {
        return 1;
    } else {
        return 0;
    }
}

export const compareByIdDesc = (a, b) => {
    if (a.id > b.id) {
        return -1;
    } else if (a.id < b.id) {
        return 1;
    } else {
        return 0;
    }
}

export const compareByReleaseDate = (a, b) => {
    if (a.release_date < b.release_date) {
        return -1;
    } else if (a.release_date > b.release_date) {
        return 1;
    } else {
        return 0;
    }
}

export const compareByReleaseDateDesc = (a, b) => {
    if (a.release_date > b.release_date) {
        return -1;
    } else if (a.release_date < b.release_date) {
        return 1;
    } else {
        return 0;
    }
}

export const compareByRating = (a, b) => {
    if (a.vote_average < b.vote_average) {
        return -1;
    } else if (a.vote_average > b.vote_average) {
        return 1;
    } else {
        return 0;
    }
}

export const compareByRatingDesc = (a, b) => {
    if (a.vote_average > b.vote_average) {
        return -1;
    } else if (a.vote_average < b.vote_average) {
        return 1;
    } else {
        return 0;
    }
}

export const compareByRevenue = (a, b) => {
    if (a.details.revenue < b.details.revenue) {
        return -1;
    } else if (a.details.revenue > b.details.revenue) {
        return 1;
    } else {
        return 0;
    }
}

export const compareByRevenueDesc = (a, b) => {
    if (a.details.revenue > b.details.revenue) {
        return -1;
    } else if (a.details.revenue < b.details.revenue) {
        return 1;
    } else {
        return 0;
    }
}

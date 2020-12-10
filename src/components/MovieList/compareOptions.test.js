import { compareById, compareByIdDesc, compareByReleaseDate, compareByReleaseDateDesc, compareByRating, compareByRatingDesc, compareByRevenue, compareByRevenueDesc } from './compareOptions';

describe("compareOptions component", () => {
    test("it renders", () => {
        expect(compareById({ id: 1 }, { id: 2 })).toBeTruthy();
        expect(compareById({ id: 2 }, { id: 1 })).toBeTruthy();
        expect(compareById({ id: 1 }, { id: 1 })).toBeFalsy();

        expect(compareByIdDesc({ id: 1 }, { id: 2 })).toBeTruthy();
        expect(compareByIdDesc({ id: 2 }, { id: 1 })).toBeTruthy();
        expect(compareByIdDesc({ id: 1 }, { id: 1 })).toBeFalsy();

        expect(compareByReleaseDate({ release_date: 1 }, { release_date: 2 })).toBeTruthy();
        expect(compareByReleaseDate({ release_date: 2 }, { release_date: 1 })).toBeTruthy();
        expect(compareByReleaseDate({ release_date: 1 }, { release_date: 1 })).toBeFalsy();

        expect(compareByReleaseDateDesc({ release_date: 1 }, { release_date: 2 })).toBeTruthy();
        expect(compareByReleaseDateDesc({ release_date: 2 }, { release_date: 1 })).toBeTruthy();
        expect(compareByReleaseDateDesc({ release_date: 1 }, { release_date: 1 })).toBeFalsy();

        expect(compareByRating({ vote_average: 1 }, { vote_average: 2 })).toBeTruthy();
        expect(compareByRating({ vote_average: 2 }, { vote_average: 1 })).toBeTruthy();
        expect(compareByRating({ vote_average: 1 }, { vote_average: 1 })).toBeFalsy();

        expect(compareByRatingDesc({ vote_average: 1 }, { vote_average: 2 })).toBeTruthy();
        expect(compareByRatingDesc({ vote_average: 2 }, { vote_average: 1 })).toBeTruthy();
        expect(compareByRatingDesc({ vote_average: 1 }, { vote_average: 1 })).toBeFalsy();

        expect(compareByRevenue({ details: { revenue: 1 } }, { details: { revenue: 2 } })).toBeTruthy();
        expect(compareByRevenue({ details: { revenue: 2 } }, { details: { revenue: 1 } })).toBeTruthy();
        expect(compareByRevenue({ details: { revenue: 1 } }, { details: { revenue: 1 } })).toBeFalsy();

        expect(compareByRevenueDesc({ details: { revenue: 1 } }, { details: { revenue: 2 } })).toBeTruthy();
        expect(compareByRevenueDesc({ details: { revenue: 2 } }, { details: { revenue: 1 } })).toBeTruthy();
        expect(compareByRevenueDesc({ details: { revenue: 1 } }, { details: { revenue: 1 } })).toBeFalsy();
    });

});

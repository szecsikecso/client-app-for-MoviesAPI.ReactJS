import { genresRAW, genres, genreOptions } from './initGenres';

describe("initGenres component", () => {
    test("it renders", () => {
        expect(genresRAW).toBeTruthy();
        expect(genres).toBeTruthy();
        expect(genreOptions).toBeTruthy();
    });

});

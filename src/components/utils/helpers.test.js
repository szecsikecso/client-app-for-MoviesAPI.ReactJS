import { convertGenreNames, convertRuntime, convertYear } from './helpers';

describe("helpers component", () => {
    test("it renders", () => {
        expect(convertGenreNames([])).toBeFalsy();

        expect(convertGenreNames(["test1"])).toBeTruthy();
        expect(convertGenreNames(["test1", "test2"])).toBeTruthy();
        expect(convertGenreNames(["test1", "test2", "test3"])).toBeTruthy();

        expect(convertGenreNames([{name: "test1"}, {name: "test2"}, {name: "test3"}])).toBeTruthy();

        expect(convertRuntime(0)).toBeTruthy();
        expect(convertRuntime(123)).toBeTruthy();

        expect(convertYear("")).toBeTruthy();
        expect(convertYear("2021-01-01")).toBeTruthy();
    });

});

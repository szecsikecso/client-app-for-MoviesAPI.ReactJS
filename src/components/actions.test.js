import configureMockStore from "redux-mock-store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";
import expect from "expect";

import * as Actions from "./actions";
import * as Types from "./types";

import { moviesApiBaseUrl } from "./utils/api";
import { movieApiUrl } from "./actions";

const mock = new MockAdapter(axios);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResponse = {
    data: {},
};

let store = mockStore({ data: {} });

const values = {
    title: "Test Movie",
    movieUrl: "www.google.hu",
    releaseDate: "2021-01-01",
    overview: "Test overview",
    runtime: 123,
    genre: [],
    tagline: "Test tagline",
    voteAverage: 10.0,
    voteCount: 123,
    budget: 123,
    revenue: 123,
}

const expectedValuesCreated = {
    title: "Test Movie",
    poster_path: "www.google.hu",
    release_date: "2021-01-01",
    overview: "Test overview",
    runtime: 123,
    genres: [],
    tagline: "Test tagline",
    vote_average: 10.0,
    vote_count: 123,
    budget: 123,
    revenue: 123,
}

const expectedValuesUpdated = {
    id: expect.any(Number),
    ...expectedValuesCreated,
}

describe("handleMovieClickAction Action", () => {
    beforeEach(function () {
        store = mockStore({ data: {} });
        console.error = jest.fn();
    });

    afterEach(function () {
        store.clearActions(); // reset store actions.
        mock.reset(); // reset mocked axios onGet, onPost, etc bindings.
    })

    test("should create an action to handleMovieClickAction", async () => {
        const movieId = 123;
        
        const expectedActionsArray = [
            {
                type: Types.MOVIE_CLICKED,
                payload: movieId,
            },
        ];

        store.dispatch(Actions.handleMovieClickAction(movieId));
        expect(store.getActions()).toEqual(expectedActionsArray);

        expect(console.error).toHaveBeenCalledTimes(0);
    });

});

describe("fetchApiMovies Action", () => {
    beforeEach(function () {
        store = mockStore({ data: {} });
        console.error = jest.fn();
    });

    afterEach(function () {
        store.clearActions(); // reset store actions.
        mock.reset(); // reset mocked axios onGet, onPost, etc bindings.
    })

    test("should create an action to fetchApiMovies with successful get", async () => {
        const expectedData = { data: [
            {
                title: "Test Movie 1",
            },
            {
                title: "Test Movie 2",
            }
        ] };
        
        const expectedActionsArray = [
            {
                type: Types.FETCH_API_MOVIES_INITIATED,
            },
            {
                type: Types.FETCH_API_MOVIES_SUCCEEDED,
                payload: expectedData.data,
            },
            {
                type: Types.FETCH_API_MOVIES_FAILED,
            },
        ];

        const offsetPart = "?offset=0";
        const getUrl = moviesApiBaseUrl + movieApiUrl + offsetPart;
        mock.onGet(getUrl).reply(200, expectedData);

        await store
            .dispatch(Actions.fetchApiMovies())
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
    });

    test("should create an action to fetchApiMovies with successful get with all genre", async () => {
        const expectedData = { data: [
            {
                title: "Test Movie 1",
            },
            {
                title: "Test Movie 2",
            }
        ] };
        
        const expectedActionsArray = [
            {
                type: Types.FETCH_API_MOVIES_INITIATED,
            },
            {
                type: Types.FETCH_API_MOVIES_SUCCEEDED,
                payload: expectedData.data,
            },
            {
                type: Types.FETCH_API_MOVIES_FAILED,
            },
        ];


        const genre = "All";
        const criteria = "Test with All genres";
        const searchPart = `&search=${criteria}&searchBy=title`;
        const offsetPart = "?offset=0";
        const getUrl = moviesApiBaseUrl + movieApiUrl + offsetPart + searchPart;
        mock.onGet(getUrl).reply(200, expectedData);

        await store
            .dispatch(Actions.fetchApiMovies(criteria, "", genre))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
    });

    test("should create an action to fetchApiMovies with successful get with genre filter", async () => {
        const expectedData = { data: [
            {
                title: "Test Movie 1",
            },
            {
                title: "Test Movie 2",
            }
        ] };
        
        const expectedActionsArray = [
            {
                type: Types.FETCH_API_MOVIES_INITIATED,
            },
            {
                type: Types.FETCH_API_MOVIES_SUCCEEDED,
                payload: expectedData.data,
            },
            {
                type: Types.FETCH_API_MOVIES_FAILED,
            },
        ];

        const criteria = "Documentary"
        const searchPart = `&search=${criteria}&searchBy=genres`;
        const offsetPart = "?offset=0";
        const getUrl = moviesApiBaseUrl + movieApiUrl + offsetPart + searchPart;
        mock.onGet(getUrl).reply(200, expectedData);

        await store
            .dispatch(Actions.fetchApiMovies("", "", criteria))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
    });

    test("should create an action to fetchApiMovies with successful get with query", async () => {
        const expectedData = { data: [
            {
                title: "Test Movie 1",
            },
            {
                title: "Test Movie 2",
            }
        ] };
        
        const expectedActionsArray = [
            {
                type: Types.FETCH_API_MOVIES_INITIATED,
            },
            {
                type: Types.FETCH_API_MOVIES_SUCCEEDED,
                payload: expectedData.data,
            },
            {
                type: Types.FETCH_API_MOVIES_FAILED,
            },
        ];

        const criteria = "Test";
        const searchPart = `&search=${criteria}&searchBy=title`;
        const offsetPart = "?offset=0";
        const getUrl = moviesApiBaseUrl + movieApiUrl + offsetPart + searchPart;
        mock.onGet(getUrl).reply(200, expectedData);

        await store
            .dispatch(Actions.fetchApiMovies(criteria, "", ""))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
    });

    test("should create an action to fetchApiMovies with successful get with sort", async () => {
        const expectedData = { data: [
            {
                title: "Test Movie 1",
            },
            {
                title: "Test Movie 2",
            }
        ] };
        
        const expectedActionsArray = [
            {
                type: Types.FETCH_API_MOVIES_INITIATED,
            },
            {
                type: Types.FETCH_API_MOVIES_SUCCEEDED,
                payload: expectedData.data,
            },
            {
                type: Types.FETCH_API_MOVIES_FAILED,
            },
        ];

        const criteria = "release_date";
        const sortPart = `&sortBy=${criteria}&sortOrder=desc`;
        const offsetPart = "?offset=0";
        const getUrl = moviesApiBaseUrl + movieApiUrl + offsetPart + sortPart;
        mock.onGet(getUrl).reply(200, expectedData);

        await store
            .dispatch(Actions.fetchApiMovies("", criteria, ""))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
    });

    test("should create an action to fetchApiMovies with empty get", async () => {
        const expectedActionsArray = [
            {
                type: Types.FETCH_API_MOVIES_INITIATED,
            },
            {
                type: Types.FETCH_API_MOVIES_EMPTY,
            },
            {
                type: Types.FETCH_API_MOVIES_FAILED,
            },
        ];

        const offsetPart = "?offset=0";
        const getUrl = moviesApiBaseUrl + movieApiUrl + offsetPart;
        mock.onGet(getUrl).reply(200, mockResponse);

        await store
            .dispatch(Actions.fetchApiMovies())
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
    });

    test("should create an action to fetchApiMovies with missing axios", async () => {
        
        const expectedActionsArray = [
            {
                type: Types.FETCH_API_MOVIES_INITIATED,
            },
            {
                type: Types.FETCH_API_MOVIES_FAILED,
            },
        ];

        // Intentionally missing axios

        await store
            .dispatch(Actions.fetchApiMovies())
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            "%cAPI Data Fetching Error:",
            "font-size: 18px",
            expect.any(Error),
        );
    });

});

describe("fetchApiMovie Action", () => {
    beforeEach(function () {
        store = mockStore({ data: {} });
        console.error = jest.fn();
    });

    afterEach(function () {
        store.clearActions(); // reset store actions.
        mock.reset(); // reset mocked axios onGet, onPost, etc bindings.
    })

    test("should create an action to fetchApiMovie with successful get", async () => {
        const movieId = 123;
        
        const expectedActionsArray = [
            {
                type: Types.FETCH_API_MOVIE_INITIATED,
            },
            {
                type: Types.FETCH_API_MOVIE_SUCCEEDED,
                payload: mockResponse,
            },
            {
                type: Types.FETCH_API_MOVIE_FAILED,
            },
        ];

        const getUrl = moviesApiBaseUrl + movieApiUrl + "/" + movieId;
        mock.onGet(getUrl).reply(200, mockResponse);

        await store
            .dispatch(Actions.fetchApiMovie(movieId))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(2);
    });

    test("should create an action to fetchApiMovie with missing axios", async () => {
        const movieId = 123;
        
        const expectedActionsArray = [
            {
                type: Types.FETCH_API_MOVIE_INITIATED,
            },
            {
                type: Types.FETCH_API_MOVIE_FAILED,
            },
        ];

        // Intentionally missing axios

        await store
            .dispatch(Actions.fetchApiMovie(movieId))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(2);
        expect(console.error).toHaveBeenCalledWith(
            "%cAPI Data Fetching Error:",
            "font-size: 18px",
            expect.any(Error),
        );
    });

});

describe("createApiMovie Action", () => {
    beforeEach(function () {
        store = mockStore({ data: {} });
        console.error = jest.fn();
    });

    afterEach(function () {
        store.clearActions(); // reset store actions.
        mock.reset(); // reset mocked axios onGet, onPost, etc bindings.
    })

    test("should create an action to createApiMovie with successful post and get", async () => {
        const expectedActionsArray = [
            {
                type: Types.CREATE_API_MOVIE_INITIATED,
            },
            {
                type: Types.CREATE_API_MOVIE_SUCCEEDED,
                payload: expectedValuesCreated,
            },
            {
                type: Types.FETCH_API_MOVIES_SUCCEEDED,
                payload: {},
            },
        ];

        const postUrl = moviesApiBaseUrl + movieApiUrl;
        const getUrl = moviesApiBaseUrl + movieApiUrl;
        mock.onPost(postUrl).reply(200, values);
        mock.onGet(getUrl).reply(200, mockResponse);

        await store
            .dispatch(Actions.createApiMovie(values))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(0);
    });

    test("should create an action to createApiMovie with only successful post", async () => {
        const expectedActionsArray = [
            {
                type: Types.CREATE_API_MOVIE_INITIATED,
            },
            {
                type: Types.CREATE_API_MOVIE_SUCCEEDED,
                payload: expectedValuesCreated,
            },
            {
                type: Types.FETCH_API_MOVIES_FAILED,
            },
        ];

        const postUrl = moviesApiBaseUrl + movieApiUrl;
        mock.onPost(postUrl).reply(200, values);

        await store
            .dispatch(Actions.createApiMovie(values))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            "%cAPI Data Fetching Error:",
            "font-size: 18px",
            expect.any(Error),
        );
    });

    test("should create an action to createApiMovie with only successful get", async () => {
        const expectedActionsArray = [
            {
                type: Types.CREATE_API_MOVIE_INITIATED,
            },
            {
                type: Types.CREATE_API_MOVIE_FAILED,
            },
        ];

        const getUrl = moviesApiBaseUrl + movieApiUrl;
        mock.onGet(getUrl).reply(200, mockResponse);

        await store
            .dispatch(Actions.createApiMovie(values))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            "%cAPI Data Creating Error:",
            "font-size: 18px",
            expect.any(Error),
        );
    });

    test("should create an action to createApiMovie without proper axios", async () => {
        const expectedActionsArray = [
            {
                type: Types.CREATE_API_MOVIE_INITIATED,
            },
            {
                type: Types.CREATE_API_MOVIE_FAILED,
            },
        ];

        const url = "";
        mock.onGet(url).reply(200, mockResponse);

        await store
            .dispatch(Actions.createApiMovie(values))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));
        //.then(result => expect(result).toEqual(undefined));

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            "%cAPI Data Creating Error:",
            "font-size: 18px",
            expect.any(Error),
        );
    });

});

describe("updateApiMovie Action", () => {
    beforeEach(function () {
        store = mockStore({ data: {} });
        console.error = jest.fn();
    });

    afterEach(function () {
        store.clearActions(); // reset store actions.
        mock.reset(); // reset mocked axios onGet, onPost, etc bindings.
    })

    test("should create an action to updateApiMovie with successful put and get", async () => {
        const movieId = 123;
        
        const expectedActionsArray = [
            {
                type: Types.UPDATE_API_MOVIE_INITIATED,
            },
            {
                type: Types.UPDATE_API_MOVIE_SUCCEEDED,
                payload: expectedValuesUpdated,
            },
            {
                type: Types.FETCH_API_MOVIES_SUCCEEDED,
                payload: {},
            },
        ];

        const putUrl = moviesApiBaseUrl + movieApiUrl;
        const getUrl = moviesApiBaseUrl + movieApiUrl;
        mock.onPut(putUrl).reply(200, values);
        mock.onGet(getUrl).reply(200, mockResponse);

        await store
            .dispatch(Actions.updateApiMovie(movieId, values))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(0);
    });

    test("should create an action to updateApiMovie with only successful put", async () => {
        const movieId = 123;
        
        const expectedActionsArray = [
            {
                type: Types.UPDATE_API_MOVIE_INITIATED,
            },
            {
                type: Types.UPDATE_API_MOVIE_SUCCEEDED,
                payload: expectedValuesUpdated,
            },
            {
                type: Types.FETCH_API_MOVIES_FAILED,
            },
        ];

        const putUrl = moviesApiBaseUrl + movieApiUrl;
        mock.onPut(putUrl).reply(200, values);

        await store
            .dispatch(Actions.updateApiMovie(movieId, values))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            "%cAPI Data Fetching Error:",
            "font-size: 18px",
            expect.any(Error),
        );
    });

    test("should create an action to updateApiMovie with only successful get", async () => {
        const expectedActionsArray = [
            {
                type: Types.UPDATE_API_MOVIE_INITIATED,
            },
            {
                type: Types.UPDATE_API_MOVIE_FAILED,
            },
        ];

        const movieId = 123;
        const getUrl = moviesApiBaseUrl + movieApiUrl;
        mock.onGet(getUrl).reply(200, mockResponse);

        await store
            .dispatch(Actions.updateApiMovie(movieId, values))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            "%cAPI Data Updating Error:",
            "font-size: 18px",
            expect.any(Error),
        );
    });

    test("should create an action to updateApiMovie without proper axios", async () => {
        const expectedActionsArray = [
            {
                type: Types.UPDATE_API_MOVIE_INITIATED,
            },
            {
                type: Types.UPDATE_API_MOVIE_FAILED,
            },
        ];

        const movieId = 123;
        const url = "";
        mock.onGet(url).reply(200, mockResponse);

        await store
            .dispatch(Actions.updateApiMovie(movieId, values))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));
        //.then(result => expect(result).toEqual(undefined));

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            "%cAPI Data Updating Error:",
            "font-size: 18px",
            expect.any(Error),
        );
    });

});

describe("deleteApiMovie Action", () => {
    beforeEach(function () {
        store = mockStore({ data: {} });
        console.error = jest.fn();
    });

    afterEach(function () {
        store.clearActions(); // reset store actions.
        mock.reset(); // reset mocked axios onGet, onPost, etc bindings.
    })

    test("should create an action to deleteApiMovie with successful delete and get", async () => {
        const movieId = 123;
        
        const expectedActionsArray = [
            {
                type: Types.DELETE_API_MOVIE_INITIATED,
            },
            {
                type: Types.DELETE_API_MOVIE_SUCCEEDED,
                payload: movieId,
            },
            {
                type: Types.FETCH_API_MOVIES_SUCCEEDED,
                payload: {},
            },
        ];

        const deleteUrl = moviesApiBaseUrl + movieApiUrl + "/" + movieId;
        const getUrl = moviesApiBaseUrl + movieApiUrl;
        mock.onDelete(deleteUrl).reply(200, mockResponse);
        mock.onGet(getUrl).reply(200, mockResponse);

        await store
            .dispatch(Actions.deleteApiMovie(movieId))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(0);
    });

    test("should create an action to deleteApiMovie with only successful delete", async () => {
        const movieId = 123;
        
        const expectedActionsArray = [
            {
                type: Types.DELETE_API_MOVIE_INITIATED,
            },
            {
                type: Types.DELETE_API_MOVIE_SUCCEEDED,
                payload: 123,
            },
            {
                type: Types.FETCH_API_MOVIES_FAILED,
            },
        ];

        const deleteUrl = moviesApiBaseUrl + movieApiUrl + "/" + movieId;
        mock.onDelete(deleteUrl).reply(200, mockResponse);

        await store
            .dispatch(Actions.deleteApiMovie(movieId))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            "%cAPI Data Fetching Error:",
            "font-size: 18px",
            expect.any(Error),
        );
    });

    test("should create an action to deleteApiMovie with only successful get", async () => {
        const expectedActionsArray = [
            {
                type: Types.DELETE_API_MOVIE_INITIATED,
            },
            {
                type: Types.DELETE_API_MOVIE_FAILED,
            },
        ];

        const movieId = 123;
        const getUrl = moviesApiBaseUrl + movieApiUrl;
        mock.onGet(getUrl).reply(200, mockResponse);

        await store
            .dispatch(Actions.deleteApiMovie(movieId))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            "%cAPI Data Deleting Error:",
            "font-size: 18px",
            expect.any(Error),
        );
    });

    test("should create an action to deleteApiMovie without proper axios", async () => {
        const expectedActionsArray = [
            {
                type: Types.DELETE_API_MOVIE_INITIATED,
            },
            {
                type: Types.DELETE_API_MOVIE_FAILED,
            },
        ];

        const movieId = 123;
        const url = "";
        mock.onGet(url).reply(200, mockResponse);

        await store
            .dispatch(Actions.deleteApiMovie(movieId))
            .then(result => expect(store.getActions()).toEqual(expectedActionsArray));
        //.then(result => expect(result).toEqual(undefined));

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            "%cAPI Data Deleting Error:",
            "font-size: 18px",
            expect.any(Error),
        );
    });

});
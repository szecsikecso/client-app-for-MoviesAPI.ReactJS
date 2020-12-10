export const regularURL = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const emptyValues = {
  title: '',
  release_date: '',
  movie_url: '',
  overview: '',
  details: {
    runtime: '',
    genres: [
      {
        id: 0,
        name: ''
      }
    ]
  }
}

export const genreOptions =
{
  1: "Unknown",
  2: "Custom Genre",
  3: "Action",
  4: "Adventure",
  5: "Animation",
  6: "Comedy",
  7: "Crime",
  8: "Drama",
  9: "Family",
  10: "Fantasy",
  11: "History",
  12: "Horror",
  13: "Mystery",
  14: "Romance",
  15: "Science Fiction",
  16: "Thriller",
}

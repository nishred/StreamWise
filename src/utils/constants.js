export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjc3OWVlYjEzOTc2ODQxZDk0MmEwNDE1NDFlNmY3ZCIsIm5iZiI6MTczMzU4OTQ3Mi4yNTUsInN1YiI6IjY3NTQ3OWUwMDk1Mjc2YWE4NTY1OWY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O0UrbGqIC-S0199Ywb7MzfpQy6ddZYEzFv74T_FG5tE",
  },
};

export const MOVIE_URL = "https://api.themoviedb.org/3/movie"

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const secondaryList = [

  {
    id : 1,
    title: "Now playing",
    type: "now_playing",
  },
  {
    id  : 2,
    title: "upcoming",
    type: "upcoming",
  },

  {
    id : 3,
    title: "Top Rated",
    type: "top_rated",
  },

  {
    id : 4,
    title: "Popular",
    type: "popular",
  },
];
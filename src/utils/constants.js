export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export const MOVIE_URL = "https://api.themoviedb.org/3/movie";
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
export const secondaryList = [
  {
    id: 1,
    title: "Now playing",
    type: "now_playing",
  },
  {
    id: 2,
    title: "upcoming",
    type: "upcoming",
  },

  {
    id: 3,
    title: "Top Rated",
    type: "top_rated",
  },

  {
    id: 4,
    title: "Popular",
    type: "popular",
  },
];

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

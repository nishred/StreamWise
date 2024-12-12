import { API_OPTIONS, MOVIE_URL } from "../utils/constants";

export async function fetchNowPlaying() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    API_OPTIONS
  );

  const json = await response.json();
  return json;
}

export async function fetchVideos(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    API_OPTIONS
  );

  const json = await response.json();

  return json;
}

export async function fetchMovieList(type) {
  const response = await fetch(`${MOVIE_URL}/${type}`, API_OPTIONS);

  const json = await response.json();

  return json;
}

export async function searchMovies(name) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${name}`,
    API_OPTIONS
  );

  const json = await response.json();

  return json;
}

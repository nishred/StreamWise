import useMovieList from "../hooks/useMovieList";
import { TMDB_IMG_URL } from "../utils/constants";
import MovieRow from "./MovieRow";

const MovieList = ({ title, type }) => {
  const { data, isLoading, error } = useMovieList(type);

  const movies = !isLoading && data.results;

  if (isLoading) return <div>Loading...</div>;

  return <MovieRow movies={movies} title={title} className={`bg-black`}/>;
};

export default MovieList;

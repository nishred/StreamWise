import MovieRow from "./MovieRow";

import useMovieByName from "../hooks/useMovieByName";

const GptMovieSuggestionCard = ({ movie }) => {
  const { data, isLoading, error } = useMovieByName(movie);

  if (isLoading) return <div>Loading...</div>;

  return <MovieRow movies={data.results} title={movie} className={"shadow-md shadow-indigo-700"}/>;
};

export default GptMovieSuggestionCard;

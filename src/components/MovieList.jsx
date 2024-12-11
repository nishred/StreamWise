import useMovieList from "../hooks/useMovieList";
import { TMDB_IMG_URL } from "../utils/constants";

const MovieList = ({title,type}) => {
  const { data, isLoading, error } = useMovieList(type);

  const movies = !isLoading && data.results;

  if (isLoading) return <div>Loading....</div>;

  return (
    <div className="bg-black pt-4 flex flex-col gap-4 px-4">
    <h1 className="text-white font-bold text-3xl uppercase">{title}</h1>
    <div className="whitespace-nowrap w-full overflow-x-scroll flex gap-4">
      {movies.map((movie) => {
        return (
          <img className="inline w-48 shadow-sm shadow-white"  key={movie.id} src={`${TMDB_IMG_URL}${movie.poster_path}`} />
        );
      })}
    </div>
    </div>
  );
};

export default MovieList;

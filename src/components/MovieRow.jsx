import { TMDB_IMG_URL } from "../utils/constants";

const MovieRow = ({ movies, title, className }) => {
  return (
    <div className={`pt-4 flex flex-col gap-4 px-4 ${className}`}>
      <h1 className="text-white font-bold text-3xl uppercase tracking-wider">{title}</h1>
      <div className="whitespace-nowrap w-full overflow-x-scroll flex gap-4 no-scrollbar">
        {movies.map((movie) => {
          return movie.poster_path ? (
            <img
              className="inline w-48 shadow-sm shadow-white"
              key={movie.id}
              src={`${TMDB_IMG_URL}${movie.poster_path}`}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default MovieRow;

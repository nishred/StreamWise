import GptMovieSuggestionCard from "./GptMovieSuggestionCard";

const GptSearchResults = ({ movieSuggestions }) => {
  if (movieSuggestions?.length === 0) return null;

  return (
    <div>
      {movieSuggestions.map((title) => {
        return <GptMovieSuggestionCard key={title} movie={title} />;
      })}
    </div>
  );
};

export default GptSearchResults;

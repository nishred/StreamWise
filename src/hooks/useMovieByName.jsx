import { useQuery } from "@tanstack/react-query";

import { searchMovies } from "../services/movies";

function useMovieByName(name) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", name],
    queryFn: async () => {
      return await searchMovies(name);
    },
  });

  return { data, isLoading, error };
}

export default useMovieByName;

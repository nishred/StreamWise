import { useQuery } from "@tanstack/react-query";
import { fetchMovieList } from "../services/movies";

export default function useMovieList(type) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movies", type],
    queryFn: async () => {
      return await fetchMovieList(type);
    },
  });

  console.log(data);

  return { isLoading, error, data };
}

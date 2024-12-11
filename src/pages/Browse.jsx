import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Background } from "./HomePage";
import { Container } from "./HomePage";
import { API_OPTIONS } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";
import { fetchNowPlaying } from "../services/movies";
import VideoContainer from "../components/VideoContainer";
import MovieList from "../components/MovieList";
import SecondaryContainer from "../components/SecondaryContainer";

// adult: false;
// backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg";
// genre_ids: (3)[(878, 28, 12)];
// id: 912649;
// original_language: "en";
// original_title: "Venom: The Last Dance";
// overview: "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.";
// popularity: 6905.968;
// poster_path: "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg";
// release_date: "2024-10-22";
// title: "Venom: The Last Dance";
// video: false;
// vote_average: 6.428;
// vote_count: 995;

const Browse = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", "now_playing"],
    queryFn: fetchNowPlaying,
  });

  const movies = data ? data.results : null;

  const movie = movies ? movies[0] : null;

  console.log(movie);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="relative">
        <Background />
        <Container>
          <Header position="relative" />
        </Container>
      </div>

      <div className="relative">
        <VideoContainer movie={movie} />
      </div>

      <SecondaryContainer />
    </>
  );
};

export default Browse;

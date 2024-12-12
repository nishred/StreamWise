import { useState } from "react";

import { useSelector } from "react-redux";

import styled from "styled-components";

import { languages } from "../utils/languageConstants";

import client from "../services/groqapi";
import { searchMovies } from "../services/movies";

import GptSearchResults from "./GptSearchResults";

const StyledGptSearchContainer = styled.div`
  background: url("https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/US-en-20241202-TRIFECTA-perspective_a95661f9-b926-4a2a-9687-5c79e3a10ae8_large.jpg");
  border: 3px solid brown;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const GptSearch = () => {
  const [search, setSearch] = useState("");

  const lang = useSelector((store) => store.appConfig.lang);

  const [movieSuggestions, setMovieSuggestions] = useState([]);

  const showSearchResults = movieSuggestions.length > 0;

  async function handleSubmit(e) {
    e.preventDefault();

    const query = `Act like a movie recommendation system.Recommend me top 5 movies based on the prompt : ${search}. The result of the query has to be a string like this "Harry potter, The lord of the rings,Don,Hobbit,Baahubali" Nothing else. I just need a string with 5 movies separated by commas.I want the exact string. I dont want here are the movies etc... Just want it to the point`;

    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "llama3-8b-8192",
    });

    const movieString = chatCompletion.choices[0].message.content;

    const movies = movieString.split(",");

    setMovieSuggestions(movies);
  }

  return (
    <div className="relative">
      <StyledGptSearchContainer />
      <div className="relative min-h-screen bg-slate-800 bg-opacity-60">
        <form
          className="flex gap-2 justify-center pt-36 items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="px-8 py-4 border border-solid border-yellow-300 rounded-lg focus:outline-none focus:ring ring-2 ring-yellow-800 inline-block w-[30%] min-w-[300px]"
            type="text"
            value={search}
            placeholder={languages[lang].gptSearchPlaceholder}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="px-6 py-4 bg-red-800 text-white rounded-lg">
            {languages[lang].search}
          </button>
        </form>

        {showSearchResults && (
          <GptSearchResults movieSuggestions={movieSuggestions} />
        )}
      </div>
    </div>
  );
};

export default GptSearch;

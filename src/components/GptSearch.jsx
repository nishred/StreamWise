import { useState } from "react";

import { useSelector } from "react-redux";

import styled from "styled-components";

import { languages } from "../utils/languageConstants";

const StyledGptSearchContainer = styled.div`
  background: url("https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/US-en-20241202-TRIFECTA-perspective_a95661f9-b926-4a2a-9687-5c79e3a10ae8_large.jpg");

  height: 100vh;
  border: 3px solid brown;
`;

const GptSearch = () => {
  const [search, setSearch] = useState("");

  const lang = useSelector((store) => store.appConfig.lang);

  return (
    <StyledGptSearchContainer>
      <form className="flex gap-2 justify-center mt-36 items-center">
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
    </StyledGptSearchContainer>
  );
};

export default GptSearch;

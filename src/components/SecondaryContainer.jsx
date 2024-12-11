import { secondaryList } from "../utils/constants";

import MovieList from "./MovieList";

const SecondaryContainer = () => {
  return (
    <div>
      {secondaryList.map((list) => {
        return <MovieList key={list.id} {...list} />;
      })}
    </div>
  );
};

export default SecondaryContainer;

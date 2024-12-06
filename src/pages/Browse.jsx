import Header from "../components/Header";
import { Background } from "./HomePage";

import { Container } from "./HomePage";


const Browse = () => {
  return (
    <>
      <div className="relative">
       <Background />
       <Container>
      <Header position="relative"/>
      </Container>
      </div>
    </>
  );
};

export default Browse;

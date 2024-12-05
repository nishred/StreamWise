import { Link } from "react-router-dom";
import styled from "styled-components";
import Trending from "../components/Trending";

const Container = styled.div`
  max-width: 95%;
  margin: 0px auto;
`;

const Background = styled.div`
  filter: blur(50px) brightness(1) contrast(2);
  background: url("https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/US-en-20241202-TRIFECTA-perspective_a95661f9-b926-4a2a-9687-5c79e3a10ae8_large.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Hero = styled.div`
  background: url("https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/US-en-20241202-TRIFECTA-perspective_a95661f9-b926-4a2a-9687-5c79e3a10ae8_large.jpg");
  object-fit: cover;
  height: 500px;
  border-radius: 12px;
`;

const HomePage = () => {
  return (
    <div className="relative">
      <Background />

      <div className="relative inset-0 bg-black bg-opacity-50">
        <Container>
          <div className="flex justify-between bg-transparent items-center">
            <img
              className="w-44"
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="netflix-logo"
            />
            <Link
              className="bg-white text-slate-700 px-4 py-2 rounded-full font-semibold"
              to={"/login"}
            >
              Sign in
            </Link>
          </div>

          <div className="relative">
            <Hero />

            <div className="absolute inset-0 flex flex-col py-8 bg-black bg-opacity-50 rounded-[12px]">
              <h1 className="text-6xl font-bold text-white max-w-[50%] tracking-wide mx-auto mt-auto leading-tight text-center shadow-2xl">
                Unlimited Movies, Tv Shows, and more
              </h1>

              <span className="text-white mx-auto mt-2 font-semibold">
                Starts at $6.99. Cancel anytime
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center mt-8 gap-4">
            <div className="text-slate-300">
              Ready to watch? Enter your email address to start your membership
            </div>

            <Link
              className="px-8 py-4 bg-red-600 text-white font-bold rounded-full text-xl"
              to={"/signup"}
            >
              Join Now
            </Link>
          </div>

          <Trending />
        </Container>
      </div>
    </div>
  );
};

export default HomePage;

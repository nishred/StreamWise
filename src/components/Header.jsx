import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { removeUser } from "../redux/userSlice";

import { signOut } from "firebase/auth";

import { auth } from "../utils/firebase";

import toast from "react-hot-toast";
import { Background } from "../pages/HomePage";

import { NavLink, useLocation } from "react-router-dom";

import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../redux/appConfigSlice";
import { useState } from "react";

const Header = () => {
  const { isAuthenticated, fullName } = useSelector((store) => store.user);

  const lang = useSelector((store) => store.appConfig.lang);

  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectVal, setSelectVal] = useState("en");

  const showGpt = location.pathname.endsWith("gpt");

  console.log(SUPPORTED_LANGUAGES);

  return (
    <div className="absolute flex justify-between bg-transparent items-center w-full z-10  px-4">
      <Link to={"/"}>
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </Link>
      {!isAuthenticated && (
        <Link
          className="bg-white text-slate-700 px-4 py-2 rounded-full font-semibold"
          to={"/signup/login"}
        >
          {"Sign In"}
        </Link>
      )}
      {isAuthenticated && (
        <div className="flex items-center gap-2">
          {showGpt && (
            <select
              className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg font-semibold"
              value={lang}
              onChange={(e) => {
                dispatch(changeLanguage({ lang: e.target.value }));
              }}
            >
              {SUPPORTED_LANGUAGES.map((langOption) => {
                return (
                  <option
                    key={langOption.identifier}
                    value={langOption.identifier}
                  >
                    {langOption.name}
                  </option>
                );
              })}
            </select>
          )}

          <NavLink
            to={showGpt ? "/browse" : "/browse/gpt"}
            className={({ isActive }) => {
              return isActive
                ? "px-4 py-2 bg-red-800 text-white font-bold rounded-lg"
                : "px-4 py-2 bg-red-500 text-white rounded-lg";
            }}
          >
            GPT Search
          </NavLink>

          {fullName && (
            <span className="px-2 py-1 bg-slate-700 text-white font-bold rounded-full">
              {fullName}
            </span>
          )}
          <button
            onClick={() => {
              signOut(auth)
                .then(() => {
                  toast.success("Successfully logged out");

                  dispatch(removeUser());

                  window.localStorage.removeItem("token");

                  navigate("/");
                })
                .catch((error) => {
                  toast.error(error.message);
                });
            }}
            className="bg-white text-slate-700 px-4 py-2 rounded-full font-semibold"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

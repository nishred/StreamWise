import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { removeUser } from "../redux/userSlice";

import { signOut } from "firebase/auth";

import { auth } from "../utils/firebase";

import toast from "react-hot-toast";

const Header = ({ position = "static" }) => {
  const { isAuthenticated, fullName } = useSelector((store) => store.user);

  console.log(isAuthenticated, fullName);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div
      className={`${position} flex justify-between bg-transparent items-center`}
    >

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
          <span className="px-2 py-1 bg-slate-700 text-white font-bold rounded-full">{fullName}</span>
          <button
            onClick={() => {
              signOut(auth)
                .then(() => {
                  toast.success("Successfully logged out");

                  dispatch(removeUser());

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

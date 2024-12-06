import LoginLayout from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import { Toaster } from "react-hot-toast";

import Browse from "./pages/Browse";

import { auth } from "./utils/firebase";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { createUser, removeUser } from "./redux/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, accessToken } = user;

        console.log(user)

        dispatch(createUser({ fullName: displayName, email, uid }));

        setToken(accessToken);
      } else {
        dispatch(removeUser());

        setToken(null);
      }
    });
  }, []);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/browse" element={<Browse />} />

          <Route path="/signup" element={<LoginLayout />}>
            <Route index element={<SignUpForm />} />

            <Route path="login" element={<SignInForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;

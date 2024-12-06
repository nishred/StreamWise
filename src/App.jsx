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

import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route
            path="/browse"
            element={
              <ProtectedRoute>
                <Browse />
              </ProtectedRoute>
            }
          />

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

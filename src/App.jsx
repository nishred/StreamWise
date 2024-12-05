import React from "react";

import LoginLayout from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/signup" element={<LoginLayout />}>
          <Route index element={<SignUpForm />} />

          <Route path="login" element={<SignInForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

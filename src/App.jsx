import React from "react";

import Login from "./pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpLayout from "./pages/SignUpLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUpLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

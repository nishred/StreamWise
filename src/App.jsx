import React from "react";

import Login from "./pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element = {<HomePage />}>
        
        </Route>

        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

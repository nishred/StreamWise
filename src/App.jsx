import LoginLayout from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import { Toaster } from "react-hot-toast";

import BrowseLayout from "./pages/BrowseLayout";

import ProtectedRoute from "./components/ProtectedRoute";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Browse from "./components/Browse";

import GptSearch from "./components/GptSearch";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route
            path="/browse"
            element={
              <ProtectedRoute>
                <BrowseLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Browse />} />
            <Route path="gpt" element={<GptSearch />} />
          </Route>

          <Route path="/signup" element={<LoginLayout />}>
            <Route index element={<SignUpForm />} />

            <Route path="login" element={<SignInForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;

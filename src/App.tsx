import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import "./index.css";
import { SignedOut } from "@clerk/clerk-react";
import SignUp from "./components/NavBar/SignUp";
import SignIn from "./components/NavBar/SignIn";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <div className="bg-gray-100 min-h-screen py-6">
              <Dashboard />
            </div>
          </>
        }
      />

      <Route
        path="/sign-in"
        element={
          <SignedOut>
            <SignIn />
          </SignedOut>
        }
      />

      <Route
        path="/sign-up"
        element={
          <SignedOut>
            <SignUp />
          </SignedOut>
        }
      />
    </Routes>
  );
};

export default App;

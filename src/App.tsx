import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import "./index.css";
import { GoogleOneTap, SignedOut, UserProfile } from "@clerk/clerk-react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <GoogleOneTap />
            <div className="bg-gray-100 min-h-screen p-8">
              <Dashboard />
            </div>
          </>
        }
      />

      <Route
        path="/profile"
        element={
          <div className="xs:mx-auto w-full">
            <NavBar />
            <UserProfile />
          </div>
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

import {Routes, Route} from "react-router-dom"
import CheckAuth from "./components/CheckAuth";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth>
              <Home />
            </CheckAuth>
          }
        />
        <Route
          path="/login" 
          element={
            <CheckAuth>
              <Login />
            </CheckAuth>
          }
        />
        <Route
          path="/signup" 
          element={
            <CheckAuth>
              <Signup />
            </CheckAuth>
          }
        />
        <Route
          path="/profile" 
          element={
            <CheckAuth>
              <Profile />
            </CheckAuth>
          }
        />
      </Routes>
    </>
  );
}

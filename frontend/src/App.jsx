<<<<<<< Updated upstream
import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <Counter />
      <Notif/>
    </div>
  )
}

function Counter() {
  const [count,setCount] = useState(0)


  function Fun(){
    // count = count + 1;
    setCount(count+1);
  }
=======
import {Routes, Route} from "react-router-dom"
import CheckAuth from "./components/CheckAuth";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
>>>>>>> Stashed changes

export default function App() {
  return (
<<<<<<< Updated upstream
    <div>
      <p>Count: {count}</p>
      <button onClick={Fun}>Increment</button> 
    </div>
  )
}

function Notif(){
  const [notif,setnotif] = useState(0);

  function Funn(){
    setnotif(!notif);
  }

  return(
    <div>
      <button onClick={Funn}>Inc Notif</button>
      {notif ?  (<p> the message has been printed</p>): null}
    </div>
  )
=======
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
      </Routes>
    </>
  );
>>>>>>> Stashed changes
}

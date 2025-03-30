import './App.css'
import Navbar from "./components/Navbar.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
          {/* This will show the navbar at the top */}
          <Navbar/>

          {/* Main content */}
          <div className="pt-16">

          </div>
      </div>
  )
}

export default App

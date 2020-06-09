import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HomePageComponent from "./HomePageComponent";

function App() {
  return (
    <Router>
      <HomePageComponent />
    </Router>
  );
}

export default App;

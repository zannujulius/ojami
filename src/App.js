import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screen/website/Home";
import { Routes, Router, Route } from "react-router-dom";
import Shopping from "./screen/app/Shopping";
function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="shopping" index element={<Shopping />} />
    </Routes>
  );
}

export default App;

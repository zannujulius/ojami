import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screen/website/Home";
import { Routes, Router, Route } from "react-router-dom";
import Shopping from "./screen/app/Shopping";
import Checkout from "./screen/app/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="shopping" index element={<Shopping />} />
      <Route path="checking/:id" index element={<Checkout />} />
    </Routes>
  );
}

export default App;

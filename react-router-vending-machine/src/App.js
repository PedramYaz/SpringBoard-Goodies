import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";

import Chips from "./Chips";
import Candy from "./Candy";
import Soda from "./Soda";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<VendingMachine />} />
        <Route path="/soda" exact element={<Soda />} />
        <Route path="/chips" exact element={<Chips />} />
        <Route path="/candy" exact element={<Candy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

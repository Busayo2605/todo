import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Complet from "./Complet";
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";

const App = () => {
  const [show, setshow] = useState(false);

  return (
    <>
      <Header setshow={setshow} show={show} />
      <Sidebar setshow={setshow} show={show} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="completed" element={<Complet />} />
      </Routes>
    </>
  );
};

export default App;

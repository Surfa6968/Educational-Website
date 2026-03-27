import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";

function App() {

  return (
    <>
      <Routes>
        
          <Route path="/" elements={<Home />} />
        
      </Routes>
    </>
  );
}

export default App;

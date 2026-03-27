import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Header from "./components/Header/Header";



function MainLayout() {
  return (
    <>
      <Header />
      
    </>
  );
}

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" elements={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

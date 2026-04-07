import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthChoice from "./components/AuthChoice/AuthChoice"
import Courses from "./components/Courses/Courses";
import AboutUs from "./components/About Us/AboutUs";



function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/auth-choice" element={<AuthChoice />} /> */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

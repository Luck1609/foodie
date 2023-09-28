// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/views/home";
import Layout from "@/layout";
import Reservation from "@/views/Reservation";
import Menu from "./views/Menu";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservations" element={<Reservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

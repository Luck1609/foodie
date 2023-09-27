// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/views/home";
import Layout from "@/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* eslint-disable react-refresh/only-export-components */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Vans from "../pages/Vans/Vans.jsx";
import VanDetail from "../pages/Vans/VanDetail.jsx";
import Dashboard from "../pages/Host/Dashboard.jsx";
import Income from "../pages/Host/Income.jsx";
import Reviews from "../pages/Host/Reviews.jsx";
import Layout from "../components/Layout.jsx";
import HostLayout from "../components/HostLayout.jsx";

import "server.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/vans" element={<Vans />}></Route>
          <Route path="/van/:id" element={<VanDetail />}></Route>

          <Route path="/" element={<HostLayout />}></Route>
          <Route index element={<Dashboard />}></Route>
          <Route path="/host/income" element={<Income />}></Route>
          <Route path="/host/reviews" element={<Reviews />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

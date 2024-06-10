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
import HostVans from "../pages/Host/HostVans.jsx";
import HostVanDetail from "../pages/Host/HostVanDetail.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound.jsx";
import Layout from "../components/Layout.jsx";
import HostLayout from "../components/HostLayout.jsx";

import "server.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/van/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />} />
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetail />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

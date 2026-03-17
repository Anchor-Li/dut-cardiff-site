import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SubCenters from "./pages/SubCenters";
import SubCenterDetail from "./pages/SubCenterDetail";
import Activities from "./pages/Activities";
import ActivityDetail from "./pages/ActivityDetail";
import Achievements from "./pages/Achievements";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sub-groups" element={<SubCenters />} />
          <Route path="sub-groups/:id" element={<SubCenterDetail />} />
          <Route path="activities" element={<Activities />} />
          <Route path="activities/:id" element={<ActivityDetail />} />
          <Route path="achievements" element={<Achievements />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

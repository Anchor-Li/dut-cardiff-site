import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SubCenters from "./pages/SubCenters";
import SubCenterDetail from "./pages/SubCenterDetail";
import Activities from "./pages/Activities";
import ActivityDetail from "./pages/ActivityDetail";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sub-centers" element={<SubCenters />} />
          <Route path="sub-centers/:id" element={<SubCenterDetail />} />
          <Route path="activities" element={<Activities />} />
          <Route path="activities/:id" element={<ActivityDetail />} />
          <Route path="achievements" element={<Achievements />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

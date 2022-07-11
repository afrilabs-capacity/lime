import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "../pages/dashboard/index";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="new-survey" element={<Dashboard />} />
</Routes>;

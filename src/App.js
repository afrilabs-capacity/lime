import logo from "./logo.svg";
import "./App.css";
import Master from "./pages/master";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard/index";
import SurveyBuilder from "./pages/admin/builder/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>Welcome</p>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-survey" element={<SurveyBuilder />} />
    </Routes>
  );
}

export default App;

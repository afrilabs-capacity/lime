import logo from "./logo.svg";
import "./App.css";
import Master from "./pages/master";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard/index";
import SurveyBuilder from "./pages/admin/builder/index";
import Surveys from "./pages/admin/surveys/surveys";
import SurveyName from "./pages/admin/surveys/survey-name";
import SurveyTemplates from "./pages/admin/surveys/survey-templates";
import NewSurvey from "./pages/admin/surveys/new-servey";

import BasicButton from "./components/builder/drag-and-drop/widgets/components/buttons/basic-button";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Master component={<Dashboard />} />} />
      <Route path="/dashboard" element={<Master component={<Dashboard />} />} />
      <Route path="/new-survey/:uuid" element={<SurveyBuilder />} />
      <Route
        path="/new-survey"
        element={<Master component={<NewSurvey />} />}
      />
      <Route
        path="/new-survey-name"
        element={<Master component={<SurveyName />} />}
      />
      <Route path="/surveys" element={<Master component={<Surveys />} />} />
      <Route
        path="/survey-templates"
        element={<Master component={<SurveyTemplates />} />}
      />
    </Routes>
  );
}

export default App;

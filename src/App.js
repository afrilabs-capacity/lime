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
import FillSurvey from "./pages/web/survey/fill-survey";
import Login from "./pages/login";
import EmailList from "./pages/admin/emails/email-list";
import CreateEmailList from "./pages/admin/emails/create-list";
import EmailListName from "./pages/admin/emails/email-list-name";
import EmailListSingle from "./pages/admin/emails/email-list-single";
import { ToastContainer } from "react-toastify";

import BasicButton from "./components/builder/drag-and-drop/widgets/components/buttons/basic-button";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Master component={<Dashboard />} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/email-list"
          element={<Master component={<EmailList />} />}
        />
        <Route
          path="/email-list-single/:listuuid"
          element={<Master component={<EmailListSingle />} />}
        />
        <Route
          path="/new-email-list-name"
          element={<Master component={<EmailListName />} />}
        />
        <Route
          exact
          path="/create-email-list/:listuuid"
          element={<Master component={<CreateEmailList />} />}
        />
        <Route
          path="/dashboard"
          element={<Master component={<Dashboard />} />}
        />
        <Route path="/new-survey/:uuid" element={<SurveyBuilder />} />
        <Route path="/survey/share/:uuid" element={<FillSurvey />} />
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
    </>
  );
}

export default App;

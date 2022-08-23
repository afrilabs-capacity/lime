import logo from "./logo.svg";
import "./App.css";
import Master from "./pages/master";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard/index";
import SurveyBuilder from "./pages/admin/builder/index";
import Surveys from "./pages/admin/surveys/surveys";
import SurveyName from "./pages/admin/surveys/survey-name";
import SurveyTemplates from "./pages/admin/surveys/survey-templates";
import SurveyNameFromTemplate from "./pages/admin/surveys/survey-name-from-template";
import NewSurvey from "./pages/admin/surveys/new-servey";
import FillSurvey from "./pages/web/survey/fill-survey";
import Login from "./pages/login";
import EmailList from "./pages/admin/emails/email-list";
import CreateEmailList from "./pages/admin/emails/create-list";
import EmailListName from "./pages/admin/emails/email-list-name";
import EmailListSingle from "./pages/admin/emails/email-list-single";
import ProjectName from "./pages/admin/project/project-name";
import Projects from "./pages/admin/project/projects";
import ProjectSingle from "./pages/admin/project/project";
import Users from "./pages/admin/users/users";
import User from "./pages/admin/users/user";
import CreateUser from "./pages/admin/users/new-user";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BasicButton from "./components/builder/drag-and-drop/widgets/components/buttons/basic-button";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Master component={<Dashboard />} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/new-user/"
          element={<Master component={<CreateUser />} />}
        />
        <Route path="/user/:uuid" element={<Master component={<User />} />} />
        <Route path="/users" element={<Master component={<Users />} />} />
        <Route
          path="/new-project-name"
          element={<Master component={<ProjectName />} />}
        />
        <Route path="/projects" element={<Master component={<Projects />} />} />
        <Route
          path="/project/:projectuuid"
          element={<Master component={<ProjectSingle />} />}
        />
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
        <Route
          path="/project/:projectuuid/survey/:surveyuuid"
          element={<SurveyBuilder />}
        />
        <Route path="/survey/share/:uuid" element={<FillSurvey />} />
        <Route
          path="/new-survey/project/:projectuuid"
          element={<Master component={<NewSurvey />} />}
        />
        <Route
          exact
          path="/new-survey-name/project/:projectuuid"
          element={<Master component={<SurveyName />} />}
        />
        <Route
          exact
          path="/new-survey-name-template/project/:projectuuid/survey/:surveyuuid"
          element={<Master component={<SurveyNameFromTemplate />} />}
        />
        <Route path="/surveys" element={<Master component={<Surveys />} />} />
        <Route
          path="/survey-templates/project/:projectuuid"
          element={<Master component={<SurveyTemplates />} />}
        />
      </Routes>
    </>
  );
}

export default App;

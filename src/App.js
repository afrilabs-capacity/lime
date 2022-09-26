import logo from "./logo.svg";
import "./App.css";
import Master from "./pages/master";
import {
  Routes,
  Route,
  Link,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/index";
import SurveyBuilder from "./pages/admin/builder/index";
import SurveyBuilderStandalone from "./pages/admin/builder/standalone";
import Surveys from "./pages/admin/surveys/surveys";
import SurveyName from "./pages/admin/surveys/survey-name";
import SurveyNameStandalone from "./pages/admin/surveys/standalone/survey-name";
import SurveyTemplates from "./pages/admin/surveys/survey-templates";
import SurveyNameFromTemplate from "./pages/admin/surveys/survey-name-from-template";
import SurveyUser from "./pages/admin/surveys/survey-user";
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
import Activity from "./pages/admin/activity";
import GenerateReport from "./pages/admin/report/create-report";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BasicButton from "./components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import React, { useContext, createContext, useState, useEffect } from "react";
import { useBuilderStore } from "../src/stores/builder";
import SurveyUserCollect from "./pages/admin/surveys/survey-user-collect";

function App() {
  const { isAuthUser } = useBuilderStore((state) => state);

  const publicRoutes = [{ path: "/login", component: <Login /> }];

  const protctedRoutes = [
    { path: "/", component: <Master component={<Dashboard />} /> },
    {
      path: "/activity/",
      component: <Master component={<Activity />} />,
    },
    {
      path: "/new-user/",
      component: <Master component={<CreateUser />} />,
    },
    {
      path: "/user/:uuid",
      component: <Master component={<User />} />,
    },
    { path: "/users", component: <Master component={<Users />} /> },
    {
      path: "/new-project-name",
      component: <Master component={<ProjectName />} />,
    },
    {
      path: "/projects",
      component: <Master component={<Projects />} />,
    },
    {
      path: "/project/:projectuuid",
      component: <Master component={<ProjectSingle />} />,
    },
    {
      path: "/email-list",
      component: <Master component={<EmailList />} />,
    },
    {
      path: "/email-list-single/:listuuid",
      component: <Master component={<EmailListSingle />} />,
    },
    {
      path: "/new-email-list-name",
      component: <Master component={<EmailListName />} />,
    },
    {
      path: "/create-email-list/:listuuid",
      component: <Master component={<CreateEmailList />} />,
    },
    {
      path: "/dashboard",
      component: <Master component={<Dashboard />} />,
    },
    // {
    //   path: "/project/:projectuuid/survey/:surveyuuid",
    //   component: <SurveyBuilder />,
    // },
    // {
    //   path: "/survey/share/:uuid",
    //   component: <Master component={<FillSurvey />} />,
    // },
    {
      path: "/new-survey/project/:projectuuid",
      component: <Master component={<NewSurvey />} />,
    },
    {
      path: "/new-survey-name/project/:projectuuid",
      component: <Master component={<SurveyName />} />,
    },
    {
      path: "/new-survey-name/standalone",
      component: <Master component={<SurveyNameStandalone />} />,
    },
    {
      path: "/new-survey-name-template/project/:projectuuid/survey/:surveyuuid",
      component: <Master component={<SurveyNameFromTemplate />} />,
    },
    {
      path: "/surveys",
      component: <Master component={<Surveys />} />,
    },
    {
      path: "/survey-templates/project/:projectuuid",
      component: <Master component={<SurveyTemplates />} />,
    },
    {
      path: "/survey/:surveyuuid/users",
      component: <Master component={<SurveyUser />} />,
    },
    {
      path: "/report/generate",
      component: <Master component={<GenerateReport />} />,
    },
  ];

  const RedirectIfAuthenticated = ({
    auth,
    redirectPath = "/dashboard",
    children,
  }) => {
    if (!auth) {
      return children;
    }
    return <Navigate to={redirectPath} replace />;
  };

  const ProtectedRoute = ({ auth, redirectPath = "/login", children }) => {
    if (!auth()) {
      return <Navigate to={redirectPath} replace />;
    }

    return children;
  };

  useEffect(() => {
    // alert(localStorage.getItem("token"));
  }, []);

  return (
    <>
      <ToastContainer />

      <Routes>
        {publicRoutes.map((r) => {
          return (
            <Route
              path={r.path}
              element={
                <RedirectIfAuthenticated auth={isAuthUser()}>
                  {r.component}
                </RedirectIfAuthenticated>
              }
            />
          );
        })}
      </Routes>

      <Routes>
        {protctedRoutes.map((r) => {
          return (
            <Route
              path={r.path}
              element={
                <ProtectedRoute auth={isAuthUser}>{r.component}</ProtectedRoute>
              }
            />
          );
        })}
        {/* <Route path="/" element={<Master component={<Dashboard />} />} />
          <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/" element={<Master component={<Dashboard />} />} />

        <Route
          path="/activity/"
          element={
            <ProtectedRoute user={isAuthUser()}>
              <Master component={<Activity />} />
            </ProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/new-user/"
          element={<Master component={<CreateUser />} />}
        /> */}
        {/* <Route path="/user/:uuid" element={<Master component={<User />} />} /> */}
        {/* <Route path="/users" element={<Master component={<Users />} />} /> */}
        {/* <Route
          path="/new-project-name"
          element={<Master component={<ProjectName />} />}
        /> */}
        {/* <Route path="/projects" element={<Master component={<Projects />} />} /> */}
        {/* <Route
          path="/project/:projectuuid"
          element={<Master component={<ProjectSingle />} />}
        /> */}
        {/* <Route
          path="/email-list"
          element={<Master component={<EmailList />} />}
        /> */}
        {/* <Route
          path="/email-list-single/:listuuid"
          element={<Master component={<EmailListSingle />} />}
        /> */}
        {/* <Route
          path="/new-email-list-name"
          element={<Master component={<EmailListName />} />}
        /> */}
        {/* <Route
          exact
          path="/create-email-list/:listuuid"
          element={<Master component={<CreateEmailList />} />}
        /> */}
        {/* <Route
          path="/dashboard"
          element={<Master component={<Dashboard />} />}
        /> */}
        <Route
          path="/project/:projectuuid/survey/:surveyuuid"
          element={<SurveyBuilder />}
        />
        <Route
          path="/project/:projectuuid/survey/:surveyuuid/tab/:tab"
          element={<SurveyBuilder />}
        />
        <Route
          path="/survey/:surveyuuid/standalone"
          element={<SurveyBuilderStandalone />}
        />
        <Route path="/survey/share/:userId/:uuid" element={<FillSurvey />} />
        <Route
          path="/survey/:surveyuuid/user/collect"
          element={<Master component={<SurveyUserCollect />} />}
        />

        {/* <Route
          path="/new-survey/project/:projectuuid"
          element={<Master component={<NewSurvey />} />}
        /> */}
        {/* <Route
          exact
          path="/new-survey-name/project/:projectuuid"
          element={<Master component={<SurveyName />} />}
        /> */}
        {/* <Route
          exact
          path="/new-survey-name-template/project/:projectuuid/survey/:surveyuuid"
          element={<Master component={<SurveyNameFromTemplate />} />}
        /> */}
        {/* <Route path="/surveys" element={<Master component={<Surveys />} />} /> */}
        {/* <Route
          path="/survey-templates/project/:projectuuid"
          element={<Master component={<SurveyTemplates />} />}
        /> */}
      </Routes>
    </>
  );
}

export default App;

import "../master";
import Header from "../../components/layout/header.js";
import RightNav from "../../components/layout/right-nav.js";
import { Routes, Route, Link } from "react-router-dom";
import TopCards from "./components/top-cards";
import axios from "axios";
import { useState, useEffect } from "react";
import SurveyCard from "./components/survey-card";
import Survey from "../../components/builder/survey-builder";

export default function DashboardLayout() {
  const [surveyTemplates, setSurveyTemplates] = useState([]);
  const getSurveys = () => {
    const url = "/api/surveys";
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setSurveyTemplates(response.data.surveys.data);
        }
      })
      .catch((error) => {
        alert(error.message);
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    getSurveys();
  }, []);
  return (
    <>
      {" "}
      <div>
        <div className="grid md:grid-cols-3">
          <div className="main-right col-span-2 p-2">
            <TopCards />
            <div>
              <h1 className="text-2xl text-blue-900 m-2">Surveys</h1>
            </div>
            {surveyTemplates &&
              surveyTemplates.map((survey) => {
                return <SurveyCard survey={survey} />;
              })}
          </div>

          <div className="main-left col-span-5 md:col-span-1 ">
            <RightNav />
          </div>
        </div>
      </div>
    </>
  );
}

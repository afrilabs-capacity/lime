import "../master";
import Header from "../../components/layout/header.js";
import RightNav from "../../components/layout/right-nav.js";
import { Routes, Route, Link } from "react-router-dom";
import TopCards from "./components/top-cards";
import axios from "axios";
import { useState, useEffect } from "react";
import SurveyCard from "./components/survey-card";
import Survey from "../../components/builder/survey-builder";
import EmptyPage from "../../components/section/empty-page";
import AnimatedLoader from "../../components/loader/loader";
import Pagination from "../../components/pagination/pagination";
import { toast } from "react-toastify";
import { isAdmin, API_BASE } from "../../utils/helper-functions";

export default function DashboardLayout() {
  const [surveyTemplates, setSurveyTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getSurveys = () => {
    const url = API_BASE + "/api/surveys";
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        if (response.status == 200) {
          setSurveyTemplates(response.data.surveys);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast("Something wenr wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const doPagination = (page) => {
    if (surveyTemplates.first_page_url) {
      setIsLoading(true);
      let queryString = surveyTemplates.first_page_url.split("page=");
      // setCurrentPage(page);
      axios
        .get(queryString[0] + "page=" + page)
        .then((res) => {
          setSurveyTemplates(res.data.surveys);
          setIsLoading(false);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
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
            <div className="my-6">{isAdmin() && <TopCards />}</div>
            <div>
              <h1 className="text-2xl text-blue-900 m-2">Surveys</h1>
            </div>
            {surveyTemplates &&
              surveyTemplates.data &&
              surveyTemplates.data.map((survey) => {
                return <SurveyCard survey={survey} />;
              })}
            {surveyTemplates.data && !surveyTemplates.data.length && (
              <EmptyPage text={"survey"} />
            )}
            <div className="flex justify-center">
              {" "}
              {surveyTemplates && (
                <Pagination
                  pagination={surveyTemplates}
                  doPagination={doPagination}
                />
              )}
            </div>
          </div>

          <div className="main-left col-span-5 md:col-span-1 ">
            <RightNav />
          </div>
        </div>
      </div>
      {isLoading && <AnimatedLoader />}
    </>
  );
}

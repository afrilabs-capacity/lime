import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_BASE } from "../../../utils/helper-functions";
import axios from "axios";

export default function SurveyTemplates() {
  let { projectuuid } = useParams();
  const [surveyTemplates, setSurveyTemplates] = useState([]);
  const getSurveys = () => {
    const url = API_BASE + "/api/surveys";
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
      <div className="flex flex-col items-center mx-3 my-6  ">
        <h1 className="text text-3xl font-bold text-center my-2">
          Survey Templates
        </h1>
        <div className="w-10/12">
          {surveyTemplates.map((survey) => {
            return (
              <a
                href={`/new-survey-name-template/project/${projectuuid}/survey/${survey.uuid}`}
              >
                <div className="p-8 border-side border-sky-400 border-l-8 hover:border-sky-900 border-l-8 my-2 rounded-lg shadow cursor-pointer AsideBackground">
                  <p className="text-lg">{survey.name}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

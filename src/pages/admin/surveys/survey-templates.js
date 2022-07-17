import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SurveyTemplates() {
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
      <div className="flex flex-col items-center mx-3 my-6  ">
        <h1 className="text text-3xl font-bold text-center my-2">
          Survey Templates
        </h1>
        <div className="w-10/12">
          {surveyTemplates.map((survey) => {
            return (
              <a href={`/new-survey/${survey.uuid}`}>
                <div className="p-8 AsideBackground rounded shadow cursor-pointer">
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

import { useState, useEffect } from "react";
import SurveyCard from "../../dashboard/components/survey-card";
import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";

import axios from "axios";
export default function Surveys() {
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
      <div className="">
        {/* <div className="flex justify-end m-2 mt-6">
          <a href="/new-survey">
            <BasicButton
              icon={`fas fa-plus text-white`}
              title={"CREATE SURVEY"}
              classes={"py-4 mt-0 bg-sky-700"}
              handleClick={() => null}
            />
          </a>
        </div> */}
        <div>
          <div className="main-right col-span-2 p-2 my-6 ">
            <div>
              <h1 className="text-lg text-blue-900 mb-6">Pinned Surveys</h1>
            </div>
            {surveyTemplates &&
              surveyTemplates.map((survey) => {
                return <SurveyCard survey={survey} />;
              })}
          </div>

          {/* <div className="main-left col-span-5 md:col-span-1 ">
            <RightNav />
          </div> */}
        </div>
        <div>
          <div className="main-right col-span-2 p-2">
            <div>
              <h1 className="text-lg text-blue-900 mb-6">All Surveys</h1>
            </div>
            {surveyTemplates &&
              surveyTemplates.map((survey) => {
                return <SurveyCard survey={survey} />;
              })}
          </div>

          {/* <div className="main-left col-span-5 md:col-span-1 ">
            <RightNav />
          </div> */}
        </div>
      </div>
    </>
  );
}

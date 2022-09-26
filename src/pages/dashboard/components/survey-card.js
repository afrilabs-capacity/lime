import { useState } from "react";
import { isAdmin, isCollector } from "../../../utils/helper-functions";
export default function SurveyCard({ survey }) {
  const getLink = (survey) => {
    if (survey.project_id) {
      return `/project/${survey.project_uuid}/survey/${survey.uuid}`;
    } else {
      return `/survey/${survey.uuid}/standalone`;
    }
  };
  return (
    <div
      className="grid md:grid-cols-5 bg-white rounded-lg p-1 gap-4 divide-x shadow border-side border-orange-400 border-l-8 my-2"
      style={{ borderLeftWidth: 14 }}
    >
      <div className="col-span-2">
        <div className="flex justify-end">
          <SurveyStatus survey={survey} />
        </div>
        <div className="px-2">
          <p className="text-lg font-normal text-blue-900">{survey.name}</p>
        </div>
        <div className="px-2">
          <p className="text-xs">{survey.project_name}</p>
        </div>
        <div
          className={`flex justify-${
            survey.project_id ? "between" : "end"
          } my-2`}
        >
          {survey.project_id && isAdmin() && (
            <a
              href={`/survey/${survey.uuid}/users`}
              className="border border-gray w-4/12 p-1 text-center hover:bg-sky-200 rounded-lg"
            >
              <div>
                <p>User(s)</p>
              </div>
            </a>
          )}
          <a
            href={getLink(survey)}
            className="border border-gray w-4/12 p-1 mx-1 text-center  hover:bg-sky-200 rounded-lg"
          >
            <div>
              <p>View</p>
            </div>
          </a>
          {survey.project_id && (
            <a
              href={"/survey/" + survey.uuid + "/user/collect"}
              className="border border-gray w-4/12 p-1 text-center hover:bg-sky-200 rounded-lg"
            >
              <div>
                <p>Collect</p>
              </div>
            </a>
          )}
        </div>
        <div></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {survey.project_id && (isAdmin() || isCollector()) ? (
          <>
            <p className="font-bold mb-2 text-blue-900 text-2xl">
              {survey.responses}
            </p>
            <p className="text-xs">Responses</p>
          </>
        ) : (
          <>
            <p className="font-bold mb-2 text-blue-900 text-2xl">N/A</p>
            <p className="text-xs">Responses</p>
          </>
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        {survey.project_id && (isAdmin() || isCollector()) ? (
          <>
            <p className="font-bold mb-2 text-blue-900 text-2xl">0%</p>
            <p className="text-xs">Completion Rate</p>
          </>
        ) : (
          <>
            {" "}
            <p className="font-bold mb-2 text-blue-900 text-2xl">N/A</p>
            <p className="text-xs">Completion Rate</p>
          </>
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        {survey.project_id && (isAdmin() || isCollector()) ? (
          <>
            <p className="font-bold mb-2 text-blue-900 text-2xl">
              {survey.survey_users}
            </p>

            <p className="text-xs">Collectors</p>
          </>
        ) : (
          <>
            <p className="font-bold mb-2 text-blue-900 text-2xl">N/A</p>

            <p className="text-xs">Collectors</p>
          </>
        )}
      </div>
      <div></div>
    </div>
  );
}

export function SurveyStatus({ survey }) {
  const statusText = () => {
    if (!survey.project_id) {
      return "N/A";
    }

    if (survey.project_id) {
      if (!survey.end_date) {
        return "N/A";
      }

      if (survey.end_date_today === true) {
        return "Ongoing";
      }
      if (survey.has_ended === false) {
        return "Ongoing";
      } else {
        return "Ended";
      }
    }

    return "N/A";
  };
  return (
    <span
      className={`text-xs px-3.5 py-0.5 rounded ${
        statusText() == "Ongoing"
          ? "bg-green-100  text-green-400"
          : "bg-orange-100  text-orange-400"
      }`}
    >
      {statusText()}
    </span>
  );
}

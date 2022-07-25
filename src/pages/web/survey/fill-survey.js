import { useBuilderStore } from "../../../stores/builder.js";
import React from "react";
import {
  getWidgetByKey,
  getWebWidgetByKey,
} from "../../../utils/helper-functions.js";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button.js";
import axios from "axios";

export default function FillSurvey() {
  let { uuid } = useParams();
  const [survey, setSurvey] = useState({});
  const { widgets, showWidgetPreviewModal, setWidgetsFromTemplate } =
    useBuilderStore((state) => state);

  const getSurvey = () => {
    const url = "/api/survey/" + uuid;
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setSurvey(response.data.survey);
          if (response.data.survey.data) {
            setWidgetsFromTemplate(response.data.survey.data);
          }

          //   console.log(response.data.series);
        }
      })
      .catch((error) => {
        alert(error.message);
        console.error("There was an error!", error);
      });
  };

  const updateSurvey = () => {
    const url = "/api/survey/update";
    axios
      .post(url, { uuid: uuid, data: JSON.stringify(widgets) })
      .then((response) => {
        if (response.status == 200) {
          setSurvey(response.data.survey);
          console.log(response.data.series);
        }
      })
      .catch((error) => {
        alert(error.message);
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    getSurvey();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center mb-16">
        <img src={"/assets/backgrounds/lime_logo.png"} />
        <div>
          <h1 className="text-5xl text-center m-2 font-bold">
            {survey && survey.name}
          </h1>
        </div>
        <div className="md:w-6/12 p-2 my-4 border border-gray-100">
          {" "}
          <div className="p-2">
            {widgets.map((item, key) => (
              <div className="m-2">{getWebWidgetByKey(item)}</div>
            ))}
          </div>
          <div className="flex justify-center">
            <BasicButton title="Submit Survey" classes={`w-8/12`} />
          </div>
        </div>
      </div>
    </>
  );
}

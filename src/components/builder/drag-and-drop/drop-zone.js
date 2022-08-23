import { useDrop } from "react-dnd";
import { ItemTypes } from "./item-types.js";
import { useBuilderStore } from "../../../stores/builder.js";
import React from "react";
import { getWidgetByKey } from "../../../utils/helper-functions.js";
import BasicButton from "./widgets/components/buttons/basic-button.js";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimatedLoader from "../../loader/loader.js";
import axios from "axios";

export default function DropZone() {
  let { projectuuid } = useParams();
  let { surveyuuid } = useParams();
  const [survey, setSurvey] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    widgets,
    showWidgetPreviewModal,
    setWidgetsFromTemplate,
    setGlobalSurvey,
  } = useBuilderStore((state) => state);

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      canDrop: () => true,
      drop: () => ({ name: "Dustbin" }),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    []
  );

  const getSurvey = () => {
    const url = "/api/survey/" + surveyuuid;
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setIsLoading(false);
          setSurvey(response.data.survey);
          setGlobalSurvey(response.data.survey);
          if (response.data.survey.data) {
            setWidgetsFromTemplate(response.data.survey.data);
          }
          //   console.log(response.data.series);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const updateSurvey = () => {
    const url = "/api/survey/update";
    setIsUpdating(true);
    axios
      .post(url, {
        surveyuuid: surveyuuid,
        projectuuid: projectuuid,
        data: JSON.stringify(widgets),
      })
      .then((response) => {
        if (response.status == 200) {
          setIsUpdating(false);
          toast("Survey Updated!", { type: "success" });
          setSurvey(response.data.survey);
          console.log(response.data.series);
        }
      })
      .catch((error) => {
        setIsUpdating(false);
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    getSurvey();
  }, []);
  return (
    <>
      {!isLoading && (
        <div ref={drop} className="grid col-span-2 content-start">
          <div className="bg-white m-2 p-2 flex justify-between">
            {/* <div>
          <h1 className="text-2xl text-center m-2 font-bold">
            {survey && survey.name}
          </h1>
        </div> */}
            <div className="flex justify-between gap-4">
              <BasicButton
                title={"Preview"}
                handleClick={showWidgetPreviewModal}
              />
            </div>
            <div className="flex justify-between gap-4">
              <BasicButton
                disabled={!widgets.length || isUpdating}
                title={isUpdating ? "Updating..." : "Update Survey"}
                handleClick={updateSurvey}
              />
            </div>
          </div>
          <div className="bg-blue">
            {widgets.map((item, key) => {
              const props = {
                item,
              };
              return <div className="m-2 border">{getWidgetByKey(item)}</div>;
            })}
          </div>
        </div>
      )}
      {isLoading && <AnimatedLoader />}
    </>
  );
}

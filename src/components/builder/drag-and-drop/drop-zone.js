import { useDrop } from "react-dnd";
import { ItemTypes } from "./item-types.js";
import { useBuilderStore } from "../../../stores/builder.js";
import React from "react";
import { getWidgetByKey, isAdmin } from "../../../utils/helper-functions.js";
import BasicButton from "./widgets/components/buttons/basic-button.js";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimatedLoader from "../../loader/loader.js";
import WidgetReorderDropzone from "./widgets/components/action/widget-reorder-dropzone.js";
import DatePicker from "react-datepicker";
import Switch from "react-switch";
import axios from "axios";

export default function DropZone() {
  let { projectuuid } = useParams();
  let { surveyuuid } = useParams();
  const [survey, setSurvey] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [enableLocation, setEnableLocation] = useState(false);
  const {
    widgets,
    showWidgetPreviewModal,
    setWidgetsFromTemplate,
    setGlobalSurvey,
  } = useBuilderStore((state) => state);

  const style = {};

  const inputClass = ` 
        sssform-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        `;

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      // canDrop: () => true,
      drop: () => ({ name: "Dustbin" }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
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

  const deleteSurvey = () => {
    const url = "/api/survey/delete/" + surveyuuid;
    setIsUpdating(true);
    axios
      .delete(url)
      .then((response) => {
        if (response.status == 200) {
          setIsUpdating(false);
          toast("Survey Deleted!", { type: "success" });
          setTimeout(() => {
            if (projectuuid) {
              window.location.href = "/project/" + projectuuid;
            } else {
              window.location.href = "/";
            }
          }, 3000);
        }
      })
      .catch((error) => {
        setIsUpdating(false);
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const handleLocationChange = () => {
    setEnableLocation((prev) => !prev);
  };

  useEffect(() => {
    getSurvey();
  }, []);
  return (
    <>
      {!isLoading && (
        <div className="grid col-span-3 content-start">
          <div className="bg-white m-2 p-2 flex justify-between">
            {/* <div>
          <h1 className="text-2xl text-center m-2 font-bold">
            {survey && survey.name}
          </h1>
        </div> */}

            <div>
              <span>Start Date:</span>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className={inputClass}
                disabled={!widgets.length}
              />
            </div>
            <div>
              <span>End Date:</span>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className={inputClass}
                disabled={!widgets.length}
              />
            </div>
          </div>
          <div className="bg-white m-2 p-2 flex justify-between">
            {/* <div>
          <h1 className="text-2xl text-center m-2 font-bold">
            {survey && survey.name}
          </h1>
        </div> */}
            <div className="flex justify-between gap-4 items-center">
              <BasicButton
                disabled={!isAdmin()}
                title={"Preview"}
                handleClick={showWidgetPreviewModal}
              />
            </div>
            <label className="flex items-center gap-4">
              <span>Location</span>
              <Switch
                onChange={handleLocationChange}
                checked={enableLocation}
              />
            </label>
            <div className="flex justify-between gap-4">
              <BasicButton
                disabled={!widgets.length || isUpdating || !isAdmin()}
                title={isUpdating ? "Updating..." : "Update"}
                handleClick={updateSurvey}
              />
              <BasicButton
                disabled={!widgets.length || isUpdating || !isAdmin()}
                title={isUpdating ? "Deleting..." : "Delete"}
                handleClick={deleteSurvey}
                classes="bg-red-500 hover:bg-red-400"
              />
            </div>
          </div>

          <div className="m-2">
            <div
              className="h-20 w-full border border-dotted border-sky-900 flex flex-col items-center items-center"
              ref={drop}
            >
              <h1 className="text-2xl">Drop Zone</h1>
              <p className="text-sm">Drag & drop widget(s) here</p>
            </div>
          </div>
          <div className="bg-blue">
            {widgets.map((item, i) => {
              const props = {
                item,
              };
              return (
                <div className="m-2 border">
                  {/* <div className="w-full">
                    {<WidgetReorderDropzone item={item} position={"top"} />}
                  </div> */}
                  {getWidgetByKey(item)}
                  {/* <div className="w-full">
                    {i == widgets.length - 1 && (
                      <WidgetReorderDropzone item={item} position={"bottom"} />
                    )}
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {isLoading && <AnimatedLoader />}
    </>
  );
}

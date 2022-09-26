import { useBuilderStore, auth } from "../../../stores/builder.js";
import React from "react";
import { toast } from "react-toastify";

import {
  getWidgetByKey,
  getWebWidgetByKey,
  API_BASE,
  authHeader,
} from "../../../utils/helper-functions.js";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button.js";
import axios from "axios";

export default function SurveyUserCollect() {
  let { surveyuuid } = useParams();
  const [survey, setSurvey] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [enableLocation, setEnableLocation] = useState(false);
  const [canSubmit, setCanSubmit] = useState(1);
  const [hasValidAnswer, setHasValidAnswer] = useState(false);
  const { widgets, showWidgetPreviewModal, setWidgetsFromTemplate } =
    useBuilderStore((state) => state);

  const getSurvey = () => {
    setWidgetsFromTemplate([]);
    const url = API_BASE + "/api/survey/" + surveyuuid;
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setSurvey(response.data.survey);
          if (response.data.survey.data) {
            setWidgetsFromTemplate(response.data.survey.data);

            if (response.data.survey.location) {
              setEnableLocation(response.data.survey.location);
            }
          }
          //   console.log(response.data.series);
        }
      })
      .catch((error) => {
        toast("Something went wrong!", { type: "error" });
      });
  };

  const submitSurvey = () => {
    setSubmitting(true);
    const url = API_BASE + "/api/survey/response/user";
    axios
      .request({
        method: "post",
        headers: authHeader(),
        url: url,
        data: {
          uuid: surveyuuid,
          data: JSON.stringify(widgets),
          longitude: longitude,
          latitude: latitude,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          setSurveySubmitted(true);
        }
        toast("Submitted", { type: "success" });
        setSubmitting(false);
        setTimeout(() => {
          window.location.href =
            "/project/" +
            survey.project_uuid +
            "/survey/" +
            surveyuuid +
            "/tab/1";
        }, 2000);
      })
      .catch((error) => {
        setSubmitting(false);
        toast("Something went wrong!", { type: "error" });
        // alert(error.message);
        // console.error("There was an error!", error);
      });
  };

  const setupSurveyTracker = () => {};

  const successCallback = (position) => {
    setLongitude(position.coords.longitude);
    setLatitude(position.coords.latitude);
    // alert(position.coords.longitude + "**" + position.coords.latitude);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  useEffect(() => {
    getSurvey();
  }, []);

  useEffect(
    () =>
      useBuilderStore.subscribe((state) => {
        canSubmitSurvey(state.widgets);
        checkIfSurveyHasAnyValidAnswer(state.widgets);
        console.log("changed");
      }),
    []
  );

  const canSubmitSurvey = (widgets) => {
    setCanSubmit(0);
    if (widgets && widgets.length) {
      widgets.map((widget) => {
        if (widget.type == "data" && widget.required) {
          if (
            widget.name == "checkbox" ||
            widget.name == "radio" ||
            widget.name == "dropdown"
          ) {
            if (widget.data) {
              if (!widget.data.length) {
                !hasValidAnswer && setHasValidAnswer(true);
                setCanSubmit((prev) => prev + 1);
              }
            } else {
              setCanSubmit((prev) => prev + 1);
            }
          } else {
            if (!widget.data) {
              setCanSubmit((prev) => prev + 1);
            }
          }
        }
      });
    } else {
    }

    console.log("done", widgets);
  };

  const checkIfSurveyHasAnyValidAnswer = (widgets) => {
    if (widgets && widgets.length) {
      widgets.map((widget) => {
        if (widget.type == "data") {
          if (
            widget.name == "checkbox" ||
            widget.name == "radio" ||
            widget.name == "dropdown"
          ) {
            if (widget.data) {
              if (widget.data.length) {
                !hasValidAnswer && setHasValidAnswer(true);
              }
            } else {
            }
          } else {
            if (widget.data) {
            }
          }
        }
      });
    } else {
    }
  };

  useEffect(() => {
    if (survey.location) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, [survey]);

  return (
    <>
      <div className="flex flex-col items-center mb-16  p-4">
        <div>
          <h1 className="text-5xl text-center m-2 font-bold">
            {survey && survey.name}
          </h1>
          <br />
        </div>
        <div className="bg-white flex justify-center w-10/12">
          {!surveySubmitted && (
            <div className="md:w-10/12 p-2 my-4 border border-gray-100">
              {" "}
              <div className="p-2">
                {widgets.map((item, key) => (
                  <div className="m-2">{getWebWidgetByKey(item)}</div>
                ))}
              </div>
              <div className="flex justify-center">
                <BasicButton
                  title={`${submitting ? "Submitting..." : "Submit Survey"}`}
                  classes={`w-8/12`}
                  disabled={
                    !widgets.length ||
                    submitting ||
                    canSubmit > 0 ||
                    !hasValidAnswer
                  }
                  handleClick={() => submitSurvey()}
                />
              </div>
            </div>
          )}
        </div>
        {surveySubmitted && (
          <div className="md:w-6/12 p-2 my-4  flex justify-center">
            {" "}
            <div className="p-2">
              <p>Your submission was successfully received.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

import { useBuilderStore } from "../../../stores/builder.js";
import React from "react";
import {
  getWidgetByKey,
  getWebWidgetByKey,
  API_BASE,
  isAuthUser,
} from "../../../utils/helper-functions.js";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button.js";
import axios from "axios";
import { toast } from "react-toastify";
import WidetEditor from "../../../components/modals/widget-editor-modal.js";

export default function FillSurvey() {
  let { uuid } = useParams();
  let { userId } = useParams();
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
    const url = API_BASE + "/api/survey/" + uuid;
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
        alert(error.message);
        toast("Something went wrong!", { type: "error" });
      });
  };

  const submitSurvey = () => {
    setSubmitting(true);
    const url = API_BASE + "/api/survey/response/web";
    axios
      .post(url, {
        uuid: uuid,
        data: JSON.stringify(widgets),
        longitude: longitude,
        latitude: latitude,
        collector_id: userId,
      })
      .then((response) => {
        if (response.status == 200) {
          setSurveySubmitted(true);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        alert(error.message);
        setSubmitting(false);
        toast("Something went wrong!", { type: "error" });
      });
  };

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

    if (isAuthUser()) {
      window.location.href = "/survey/" + uuid + "/user/collect";
    }
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
      <div className="flex flex-col items-center mb-16 py-2">
        <img src={"/assets/backgrounds/lime_logo.png"} />
        <p class=" mx-auto md:mx-0 text-sky-700 text-center text-xs">
          LoftyInc Impact Monitoring and Evaluation
        </p>
        <div>
          <h1 className="text-5xl text-center m-2 font-bold">
            {survey && survey.name}
          </h1>
        </div>
        {!surveySubmitted && (
          <div className="md:w-6/12 p-2 my-4 border border-gray-100">
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

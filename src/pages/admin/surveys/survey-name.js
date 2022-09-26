import { useState } from "react";
import BasicTextField from "../../../components/builder/drag-and-drop/widgets/components/input/basic-textfield";
import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { API_BASE } from "../../../utils/helper-functions";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export default function SurveyName() {
  let { projectuuid } = useParams();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const url = API_BASE + "/api/survey";

  const addSurveyName = () => {
    setIsLoading(true);
    axios
      .post(url, { name: name, project_uuid: projectuuid })
      .then((response) => {
        setIsLoading(false);
        if (response.status == 200) {
          toast("Survey Created!", { type: "success" });
          setTimeout(() => {
            window.location.href = `/project/${projectuuid}/survey/${response.data.survey.uuid}`;
          }, 2000);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response.status == 422) {
          toast("Survey name already exists!", { type: "error" });
        } else {
          toast("Something went wrong!", { type: "error" });
        }
        console.error("There was an error!", error);
      });
  };

  const handleNameChange = (name) => {
    setName(name);
  };

  return (
    <>
      <div className="flex flex-col items-center mx-3 my-6  ">
        <div className="w-10/12">
          <h1 className="text text-3xl font-bold my-3 ml-2  text-blue-900">
            Name your Survey
          </h1>
          <div className="m-2 mb-3">
            {/* <label className="text-black">Name</label> */}
            <BasicTextField
              classes={"my-2 text-lg h-20"}
              placeholder={"e.g Community Health Opinion Survey"}
              handleChange={handleNameChange}
            />
          </div>

          <div className="text-center">
            <br />
            <BasicButton
              disabled={!name || isLoading}
              title={isLoading ? "Creating.." : "CREATE SURVEY"}
              classes={"w-4/12 mt-0 p-4 h-14"}
              handleClick={addSurveyName}
            />
          </div>
        </div>
      </div>
    </>
  );
}

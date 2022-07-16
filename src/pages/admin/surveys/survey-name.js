import { useState } from "react";
import BasicTextField from "../../../components/builder/drag-and-drop/widgets/components/input/basic-textfield";
import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import axios from "axios";
export default function SurveyName() {
  const [name, setName] = useState("");

  const url = "/api/survey";

  const addSurveyName = () => {
    axios
      .post(url, { name: name })
      .then((response) => {
        if (response.status == 200) {
          window.location.href = `/new-survey/${response.data.survey.uuid}`;
        }
      })
      .catch((error) => {
        alert(error.message);
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
              classes={"py-6 my-2 text-lg"}
              placeholder={"e.g Community Health Opinion Survey"}
              handleChange={handleNameChange}
            />
          </div>

          <div className="text-center">
            <br />
            <BasicButton
              disabled={!name}
              title={"CREATE SURVEY"}
              classes={"py-4 w-4/12 mt-0"}
              handleClick={addSurveyName}
            />
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import BasicTextField from "../../../components/builder/drag-and-drop/widgets/components/input/basic-textfield";
import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE } from "../../../utils/helper-functions";
import { toast } from "react-toastify";
import axios from "axios";
export default function EmailListName() {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const url = API_BASE + "/api/email-list/create";

  const addSurveyName = () => {
    setIsLoading(true);
    axios
      .post(url, { name: name })
      .then((response) => {
        if (response.status == 200) {
          setIsLoading(false);
          window.location.href = `/create-email-list/${response.data.list.uuid}`;
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast("Something went wrong!", { type: "error" });
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
            Name your Email List
          </h1>
          <div className="m-2 mb-3">
            {/* <label className="text-black">Name</label> */}
            <BasicTextField
              classes={"py-6 my-2 text-lg h-20"}
              placeholder={"e.g Health List"}
              handleChange={handleNameChange}
            />
          </div>

          <div className="text-center">
            <br />
            <BasicButton
              disabled={!name || isLoading}
              title={isLoading ? "Creating..." : "CREATE LIST"}
              classes={"w-4/12 mt-0 p-4 h-14"}
              handleClick={addSurveyName}
            />
          </div>
        </div>
      </div>
    </>
  );
}

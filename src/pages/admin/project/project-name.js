import { useState } from "react";
import BasicTextField from "../../../components/builder/drag-and-drop/widgets/components/input/basic-textfield";
import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE } from "../../../utils/helper-functions";
import { toast } from "react-toastify";
import axios from "axios";
export default function ProjectName() {
  const [name, setName] = useState("");
  const [creating, setCreating] = useState(false);

  const url = API_BASE + "/api/project/create";

  const addProjejctName = () => {
    setCreating(true);
    axios
      .post(url, { name: name })
      .then((response) => {
        if (response.status == 200) {
          toast("Project Created!", { type: "success" });
          setTimeout(() => {
            setCreating(false);
            window.location.href = `/project/${response.data.list.uuid}`;
          }, 2000);
        }
      })
      .catch((error) => {
        setCreating(false);
        if (error.response.status == 422) {
          toast("Project name already exists!", { type: "error" });
        } else {
          toast("Something went wrong!", { type: "error" });
        }
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
            Name your Project
          </h1>
          <div className="m-2 mb-3">
            {/* <label className="text-black">Name</label> */}
            <BasicTextField
              classes={"py-6 my-2 text-lg h-20"}
              placeholder={"e.g My Project"}
              handleChange={handleNameChange}
            />
          </div>

          <div className="text-center">
            <br />
            <BasicButton
              disabled={!name || creating}
              title={creating ? "Creating.." : "CREATE PROJECT"}
              classes={"w-4/12 mt-0 p-4 h-14"}
              handleClick={addProjejctName}
            />
          </div>
        </div>
      </div>
    </>
  );
}

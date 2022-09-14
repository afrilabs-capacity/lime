import { useState } from "react";
import BasicTextField from "../../../../components/builder/drag-and-drop/widgets/components/input/basic-textfield";
import BasicButton from "../../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { API_BASE } from "../../../../utils/helper-functions";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export default function SurveyNameStandalone() {
  const [name, setName] = useState("");
  const [projectuuid, setProjectuuid] = useState("");
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);

  const url = API_BASE + "/api/survey";

  const addSurveyName = () => {
    setIsLoading(true);
    axios
      .post(url, {
        name: name,
        project_uuid: projectuuid,
      })
      .then((response) => {
        if (response.status == 200) {
          toast("Survey Created!", { type: "success" });
          setTimeout(() => {
            setIsLoading(false);
            if (projectuuid) {
              window.location.href = `/project/${projectuuid}/survey/${response.data.survey.uuid}`;
            } else {
              window.location.href = `/survey/${response.data.survey.uuid}/standalone`;
            }
          }, 3000);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const getProjects = () => {
    const url = API_BASE + "/api/projects";
    setIsLoadingProjects(true);
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setIsLoadingProjects(false);
          setProjects(response.data);
          //   alert(JSON.stringify(response.data));
        }
      })
      .catch((error) => {
        // alert(error.message);
        toast("Something wenr wrong!", { type: "error" });
        setIsLoadingProjects(false);
        console.error("There was an error!", error);
      });
  };

  const handleNameChange = (name) => {
    setName(name);
  };

  const handleProjectChange = (uuid) => {
    setProjectuuid(uuid);
  };

  useEffect(() => {
    getProjects();
  }, []);

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

          <div className="m-2 mb-3">
            <select
              className=" form-control
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
        h-20
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              onChange={(e) => handleProjectChange(e.target.value)}
            >
              <option value="">Select Project (optional)</option>
              {projects &&
                projects.data &&
                projects.data.map((option) => (
                  <option value={option.uuid}>{option.name}</option>
                ))}
            </select>
          </div>

          <div className="text-center">
            <br />
            <BasicButton
              disabled={!name | isLoading}
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

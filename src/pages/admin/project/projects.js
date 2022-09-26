import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { useState, useEffect } from "react";
import AttachSurveyModal from "../modals/attach-survey-modal";
import axios from "axios";
import AnimatedLoader from "../../../components/loader/loader";
import EmptyPage from "../../../components/section/empty-page";
import { toast } from "react-toastify";
import Pagination from "../../../components/pagination/pagination";
import {
  API_BASE,
  shouldRenderEmptyPage,
} from "../../../utils/helper-functions";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const getProjects = () => {
    const url = API_BASE + "/api/projects";
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setIsLoading(false);
          setProjects(response.data);
        }
      })
      .catch((error) => {
        // alert(error.message);
        toast("Something went wrong!", { type: "error" });
        setIsLoading(false);
        console.error("There was an error!", error);
      });
  };

  const doPagination = (page) => {
    if (projects.first_page_url) {
      setIsLoading(true);
      let queryString = projects.first_page_url.split("page=");
      setCurrentPage(page);
      axios
        .get(queryString[0] + "page=" + page)
        .then((res) => {
          setProjects(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  };

  const deleteSurvey = (project) => {
    const url = API_BASE + "/api/project/delete/" + project.uuid;
    setIsLoading(true);
    axios
      .delete(url)
      .then((response) => {
        setIsLoading(false);
        if (response.status == 200) {
          setIsLoading(false);
          getProjects();
          toast("Project Deleted", { type: "success" });
        }
      })
      .catch((error) => {
        // alert(error.message);
        toast("Something went wrong!", { type: "error" });
        setIsLoading(false);
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <>
      {!isLoading && (
        <div className="flex flex-col items-center m-2">
          <h1 className="text text-3xl my-3 mt-6 ml-2 text-blue-900">
            Projects
          </h1>
          <p></p>
          <br />
          <div className="flex justify-center md:justify-end m-2 w-10/12">
            <a href="/new-project-name">
              <BasicButton
                icon={`fas fa-plus text-white`}
                title={"CREATE PROEJCT"}
                classes={"mt-0 bg-sky-700 w-full"}
                handleClick={() => null}
              />
            </a>
          </div>
          <div className="w-10/12 mt-6 rounded-lg divide-y">
            {projects &&
              projects.data &&
              projects.data.map((project, i) => (
                <div className="p-8 shadow border-side border-sky-400 border-l-8 hover:border-sky-900 border-l-8 my-2 rounded-lg  cursor-pointer AsideBackground relative flex flex-col md:flex-row items-center md:justify-between gap-4">
                  <div>
                    <p className="text-lg">{project.name}</p>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
                    <a href={`/project/${project.uuid}`}>
                      <BasicButton
                        title={"VIEW"}
                        classes={"mt-0 bg-sky-700 w-full"}
                        handleClick={() => null}
                      />
                    </a>
                    <BasicButton
                      title={"DELETE"}
                      classes={
                        "mt-0 bg-sky-700 w-full bg-red-500 hover:bg-red-300 "
                      }
                      handleClick={() => deleteSurvey(project)}
                    />
                  </div>
                </div>
              ))}
            {shouldRenderEmptyPage(projects) && <EmptyPage text={"project"} />}
            {projects && (
              <Pagination pagination={projects} doPagination={doPagination} />
            )}
          </div>
        </div>
      )}{" "}
      {isLoading && <AnimatedLoader />}
    </>
  );
}

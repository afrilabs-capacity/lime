import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { useState, useEffect } from "react";
import AttachSurveyModal from "../modals/attach-survey-modal";
import axios from "axios";
import AnimatedLoader from "../../../components/loader/loader";
import { toast } from "react-toastify";
import Pagination from "../../../components/pagination/pagination";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [paginationData, setPaginationData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const url = "/api/projects";
  const getProjects = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setIsLoading(false);
          setProjects(response.data.data);
          setPaginationData(response.data);
        }
      })
      .catch((error) => {
        // alert(error.message);
        toast("Something wenr wrong!", { type: "error" });
        setIsLoading(false);
        console.error("There was an error!", error);
      });
  };

  const doPagination = (page) => {
    if (paginationData.first_page_url) {
      setIsLoading(true);
      let queryString = paginationData.first_page_url.split("page=");
      setCurrentPage(page);
      axios
        .get(queryString[0] + "page=" + page)
        .then((res) => {
          setProjects(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
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
            {projects.map((project, i) => (
              <a href={`/project/${project.uuid}`}>
                <div className="p-8 shadow border-side border-sky-400 border-l-8 hover:border-sky-900 border-l-8 my-2 rounded-lg  cursor-pointer AsideBackground">
                  <p className="text-lg">{project.name}</p>
                </div>
              </a>
            ))}
          </div>
          {paginationData && (
            <Pagination
              pagination={paginationData}
              doPagination={doPagination}
            />
          )}
        </div>
      )}{" "}
      {isLoading && <AnimatedLoader />}
    </>
  );
}

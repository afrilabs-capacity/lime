import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AttachSurveyModal from "../modals/attach-survey-modal";
import AttachUserModal from "../modals/attach-user-modal";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import SurveyCardDetachable from "../../dashboard/components/survey-card-detachable";
import SurveyCard from "../../dashboard/components/survey-card";
import UserCardDetachable from "../../dashboard/components/user-card-detachable";
import Pagination from "../../../components/pagination/pagination";
import { API_BASE } from "../../../utils/helper-functions";
import axios from "axios";

export default function ProjectSingle() {
  let { projectuuid } = useParams();
  const [project, setProject] = useState({});
  const [surveyModalOpen, setSurveyModalOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [projectSurveys, setProjectSurveys] = useState([]);
  const [projectUsers, setProjectUsers] = useState([]);
  const [isDetaching, setIsDetaching] = useState(false);
  const [currentProjectSurveysPage, setCurrentProjectSurveysPage] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);

  const getProject = () => {
    const url = API_BASE + "/api/project/" + projectuuid;
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setProject(response.data.project);
          //   window.location.href = `/create-email-list/${response.data.list.uuid}`;
        }
      })
      .catch((error) => {
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const getProjectSurveys = () => {
    const url = API_BASE + "/api/project/" + projectuuid + "/surveys";
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setProjectSurveys(response.data.project_surveys);
        }
      })
      .catch((error) => {
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const getProjectUsers = () => {
    const url = API_BASE + "/api/project/" + projectuuid + "/users";
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setProjectUsers(response.data.project_users);
        }
      })
      .catch((error) => {
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const detachSurvey = (surveyuuid) => {
    setIsDetaching(true);
    const url = API_BASE + "/api/project/detach/survey";

    axios
      .post(url, { surveyuuid: surveyuuid, projectuuid: projectuuid })
      .then((response) => {
        setIsDetaching(false);
        if (response.status == 200) {
          toast("Survey detached successfully!", { type: "success" });
          getProjectSurveys();
        }
      })
      .catch((error) => {
        setIsDetaching(false);
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const detachUser = (useruuid) => {
    setIsDetaching(true);
    const url = API_BASE + "/api/project/detach/user";

    axios
      .post(url, { useruuid: useruuid, projectuuid: projectuuid })
      .then((response) => {
        setIsDetaching(false);
        if (response.status == 200) {
          toast("User detached successfully!", { type: "success" });
          getProjectUsers();
        }
      })
      .catch((error) => {
        setIsDetaching(false);
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const openAttachSurveyModal = () => {
    setSurveyModalOpen(true);
  };

  const closeAttachSurveyModal = () => {
    setSurveyModalOpen(false);
  };

  const openAttachUserModal = () => {
    setUserModalOpen(true);
  };

  const closeAttachUserModal = () => {
    setUserModalOpen(false);
  };

  const doProjectSurveysPagination = (page) => {
    if (projectSurveys.first_page_url) {
      //   setIsLoading(true);
      let queryString = projectSurveys.first_page_url.split("page=");
      setCurrentProjectSurveysPage(page);
      axios
        .get(queryString[0] + "page=" + page)
        .then((res) => {
          setProjectSurveys(res.data.project_surveys);
          //   setIsLoading(false);
        })
        .catch((err) => console.log(err))
        .finally(() => null);
    }
  };

  const doProjectUsersPagination = (page) => {
    if (projectUsers.first_page_url) {
      //   setIsLoading(true);
      let queryString = projectUsers.first_page_url.split("page=");
      //   setCurrentProjectSurveysPage(page);
      axios
        .get(queryString[0] + "page=" + page)
        .then((res) => {
          setProjectUsers(res.data.project_users);
          //   setIsLoading(false);
        })
        .catch((err) => console.log(err))
        .finally(() => null);
    }
  };

  const deleteProject = () => {};

  useEffect(() => {
    getProject();
    getProjectSurveys();
    getProjectUsers();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center m-2">
        <h1 className="text text-3xl my-3 ml-2  text-blue-900">
          {project.name}
        </h1>
        <p></p>
        <br />

        <div className=" w-10/12 mt-6 rounded-lg divide-y">
          {/* <div className="flex justify-center p-2 ">
            <div>
              <p className="p-2">{""}</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <BasicButton
                disabled={isDeleting}
                title={isDeleting ? "Deleting..." : "Delete Project"}
                handleClick={deleteProject}
                classes="bg-red-500 hover:bg-red-400"
              />
            </div>
          </div> */}

          {projectSurveys && (
            <div className="mb-6 bg-white rounded-lg p-2">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <h1 className="text text-2xl font-bold my-3 ml-2  text-blue-900">
                  Surveys
                </h1>
                <div>
                  <a href={`/new-survey/project/${projectuuid}`}>
                    <BasicButton
                      icon={`fas fa-plus text-white`}
                      title={"CREATE SURVEY"}
                      classes={"mt-0 bg-sky-700"}
                    />
                  </a>
                </div>
              </div>
              <div className="my-6">
                <div className="flex flex-col justify-center items-center">
                  {projectSurveys &&
                    projectSurveys.data &&
                    !projectSurveys.data.length && <p>We found 0 survey(s)</p>}
                </div>
                <div className="">
                  {projectSurveys &&
                    projectSurveys.data &&
                    projectSurveys.data.map((survey) => {
                      return (
                        <SurveyCard
                          survey={survey}
                          detachSurvey={detachSurvey}
                          isDetaching={isDetaching}
                        />
                      );
                      {
                      }
                    })}
                  <div className="flex flex-col justify-center items-center w-full">
                    {projectSurveys && projectSurveys.data && (
                      <Pagination
                        pagination={projectSurveys}
                        doPagination={doProjectSurveysPagination}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* {projectUsers && (
            <div className="mb-6 bg-white rounded-lg p-2">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <h1 className="text text-2xl font-bold my-3 ml-2  text-blue-900">
                  Users
                </h1>
                <div>
                  <BasicButton
                    icon={`fas fa-plus text-white`}
                    title={"ATTACH USER"}
                    classes={"mt-0 bg-sky-700"}
                    handleClick={openAttachUserModal}
                  />
                </div>
              </div>
              <div className="my-6">
                <div className="flex flex-col justify-center items-center">
                  {projectUsers &&
                    projectUsers.data &&
                    !projectUsers.data.length && <p>We found 0 survey(s)</p>}
                </div>
                <div className="">
                  {projectUsers &&
                    projectUsers.data &&
                    projectUsers.data.map((user) => {
                      return (
                        <UserCardDetachable
                          user={user}
                          detachUser={detachUser}
                          isDetaching={isDetaching}
                        />
                      );
                      {
                      }
                    })}
                  <div className="flex flex-col justify-center items-center w-full">
                    {projectUsers && projectUsers.data && (
                      <Pagination
                        pagination={projectUsers}
                        doPagination={doProjectUsersPagination}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
      {/* <AttachSurveyModal
        modalOpen={surveyModalOpen}
        hideModal={closeAttachSurveyModal}
        projectuuid={projectuuid}
        action={getProjectSurveys}
        projectSurveys={projectSurveys}
      /> */}
      <AttachUserModal
        modalOpen={userModalOpen}
        hideModal={closeAttachUserModal}
        projectuuid={projectuuid}
        action={getProjectUsers}
        projectUsers={projectUsers}
      />
    </>
  );
}

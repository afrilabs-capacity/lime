import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AttachSurveyModal from "../modals/attach-survey-modal";
import AttachUserModal from "../modals/attach-user-modal";
import AttachSurveyUserModal from "../modals/attach-survey-user-modal";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import SurveyCardDetachable from "../../dashboard/components/survey-card-detachable";
import SurveyCard from "../../dashboard/components/survey-card";
import UserCardDetachable from "../../dashboard/components/user-card-detachable";
import Pagination from "../../../components/pagination/pagination";
import axios from "axios";

export default function SurveyUser() {
  const { surveyuuid } = useParams();
  const [survey, setSurvey] = useState({});
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [surveyUsers, setSurveyUsers] = useState([]);
  const [isDetaching, setIsDetaching] = useState(false);
  const [currentSurveyUsersPage, setCurrentSurveyUsersPage] = useState(1);

  const getSurvey = () => {
    const url = "/api/survey/" + surveyuuid;
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setSurvey(response.data.survey);
        }
      })
      .catch((error) => {
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const getSurveyUsers = () => {
    const url = "/api/survey/" + surveyuuid + "/users";
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setSurveyUsers(response.data.survey_users);
        }
      })
      .catch((error) => {
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const detachUser = (useruuid) => {
    setIsDetaching(true);
    const url = "/api/survey/detach/user";

    axios
      .post(url, { useruuid: useruuid, surveyuuid: surveyuuid })
      .then((response) => {
        setIsDetaching(false);
        if (response.status == 200) {
          toast("User detached successfully!", { type: "success" });
          getSurveyUsers();
        }
      })
      .catch((error) => {
        setIsDetaching(false);
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const openAttachUserModal = () => {
    setUserModalOpen(true);
  };

  const closeAttachUserModal = () => {
    setUserModalOpen(false);
  };

  const doSurveyUsersPagination = (page) => {
    if (surveyUsers.first_page_url) {
      //   setIsLoading(true);
      let queryString = surveyUsers.first_page_url.split("page=");
      //   setCurrentProjectSurveysPage(page);
      axios
        .get(queryString[0] + "page=" + page)
        .then((res) => {
          setSurveyUsers(res.data.survey_users);
          //   setIsLoading(false);
        })
        .catch((err) => console.log(err))
        .finally(() => null);
    }
  };

  useEffect(() => {
    getSurvey();
    getSurveyUsers();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center m-2">
        <h1 className="text text-3xl my-3 ml-2  text-blue-900">
          {survey.name}
        </h1>
        <p></p>
        <br />

        <div className=" w-10/12 mt-6 rounded-lg  divide-y">
          {/* {project &&
            project.surveys &&
            project.surveys.map((survey, i) => (
              <div className="flex justify-between p-2 ">
                <div>
                  <p className="p-2">{""}</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <BasicButton
                    title={"DELETE"}
                    classes={"mt-0 bg-red-700"}
                    handleClick={() => null}
                  />
                </div>
              </div>
            ))} */}
          {surveyUsers && (
            <div className="mb-6 bg-white rounded-lg p-2">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <h1 className="text text-2xl font-bold my-3 ml-2  text-blue-900">
                    Users
                  </h1>
                </div>
                <div>
                  <div className="p-1 mt-1 rounded-lg">
                    <p>
                      <span className="text-1xl font-bold">project:</span>{" "}
                      <a
                        href={`/project/${survey.project_uuid}`}
                        className="underline text-sm "
                      >
                        <span className="m-1">{survey.project_name}</span>
                      </a>
                    </p>
                  </div>
                </div>
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
                {surveyUsers && surveyUsers.data && !surveyUsers.data.length && (
                  <div className="flex flex-col justify-center items-center py-32">
                    <p>We found 0 user(s)</p>
                  </div>
                )}

                <div className="">
                  {surveyUsers &&
                    surveyUsers.data &&
                    surveyUsers.data.map((user) => {
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
                    {surveyUsers && surveyUsers.data && (
                      <Pagination
                        pagination={surveyUsers}
                        doPagination={doSurveyUsersPagination}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <AttachSurveyUserModal
        modalOpen={userModalOpen}
        hideModal={closeAttachUserModal}
        surveyuuid={surveyuuid}
        action={getSurveyUsers}
        surveyUsers={surveyUsers}
      />
    </>
  );
}

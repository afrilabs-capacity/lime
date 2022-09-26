import { useState, useEffect } from "react";
import SurveyCard from "../../dashboard/components/survey-card";
import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { toast } from "react-toastify";
import EmptyPage from "../../../components/section/empty-page";
import AnimatedLoader from "../../../components/loader/loader";
import Pagination from "../../../components/pagination/pagination";
import {
  API_BASE,
  shouldRenderEmptyPage,
  authHeader,
} from "../../../utils/helper-functions";
import axios from "axios";
export default function Surveys() {
  const [surveyTemplates, setSurveyTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getSurveys = () => {
    const url = API_BASE + "/api/surveys";
    setIsLoading(true);

    axios
      .request({
        method: "get",
        headers: authHeader(),
        url: url,
      })
      .then((response) => {
        setIsLoading(false);
        if (response.status == 200) {
          setSurveyTemplates(response.data.surveys);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const doPagination = (page) => {
    if (surveyTemplates.first_page_url) {
      setIsLoading(true);
      let queryString = surveyTemplates.first_page_url.split("page=");
      // setCurrentPage(page);
      axios
        .request({
          method: "get",
          headers: authHeader(),
          url: queryString[0] + "page=" + page,
        })
        .then((res) => {
          setSurveyTemplates(res.data.surveys);
          setIsLoading(false);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    getSurveys();
  }, []);
  return (
    <>
      <div className="">
        {/* <div className="flex justify-end m-2 mt-6">
          <a href="/new-survey">
            <BasicButton
              icon={`fas fa-plus text-white`}
              title={"CREATE SURVEY"}
              classes={"py-4 mt-0 bg-sky-700"}
              handleClick={() => null}
            />
          </a>
        </div> */}
        <div>
          <div className="main-right col-span-2 p-2 my-6 ">
            <div>
              <h1 className="text-lg text-blue-900 mb-6">Pinned Surveys</h1>
            </div>
            {surveyTemplates &&
              surveyTemplates.data &&
              surveyTemplates.data.map((survey) => {
                return <SurveyCard survey={survey} />;
              })}

            {(surveyTemplates.data && !surveyTemplates.data.length) ||
              (!surveyTemplates.data && <EmptyPage text={"survey"} />)}
          </div>

          {/* <div className="main-left col-span-5 md:col-span-1 ">
            <RightNav />
          </div> */}
        </div>
        <div>
          <div className="main-right col-span-2 p-2">
            <div>
              <h1 className="text-lg text-blue-900 mb-6">All Surveys</h1>
            </div>
            {surveyTemplates &&
              surveyTemplates.data &&
              surveyTemplates.data.map((survey) => {
                return <SurveyCard survey={survey} />;
              })}
            {shouldRenderEmptyPage(surveyTemplates) && (
              <EmptyPage text={"survey"} />
            )}
          </div>

          <div className="flex justify-center">
            {" "}
            {surveyTemplates && (
              <Pagination
                pagination={surveyTemplates}
                doPagination={doPagination}
              />
            )}
          </div>

          {/* <div className="main-left col-span-5 md:col-span-1 ">
            <RightNav />
          </div> */}
        </div>
      </div>
    </>
  );
}

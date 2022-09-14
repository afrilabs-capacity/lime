import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { useState, useEffect, useRef } from "react";
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
import DatePicker from "react-datepicker";
import { CSVLink, CSVDownload } from "react-csv";

export default function GenerateReport() {
  const exportBtn = useRef();
  const [surveys, setSurveys] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [projectuuid, setProjectuuid] = useState();
  const [surveyuuid, setSurveyuuid] = useState();
  const [reports, setReports] = useState([]);
  const [reportsHeader, setReportsHeader] = useState([]);
  const [reportsData, setReportsData] = useState([]);

  const inputClass = ` 
        sssform-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`;
  const getProjectSurveys = () => {
    const url = "/api/project/" + projectuuid + "/surveys";
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        if (response.status == 200) {
          setSurveys(response.data.project_surveys);
          setSurveyuuid("");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const getProjects = () => {
    const url = "/api/projects/all";
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
        toast("Something wenr wrong!", { type: "error" });
        setIsLoading(false);
        console.error("There was an error!", error);
      });
  };

  const generateReport = () => {
    const url = "/api/survey/report";
    setIsLoading(true);

    axios
      .post(url, {
        startDate: startDate,
        endDate: endDate,
        projectuuid: projectuuid,
        surveyuuid: surveyuuid,
      })
      .then((response) => {
        if (response.status == 200) {
          setIsLoading(false);
          if (response.data.reports.length) {
            const headers = JSON.parse(response.data.reports[0].data)
              .map((report, i) => {
                if (report.type === "data") {
                  return {
                    label: report.label.replace(/(<([^>]+)>)/gi, ""),
                    key: i.toString(),
                  };
                }
              })
              .filter((item) => typeof item === "object" && item !== null);

            const data = response.data.reports.map((r, i) => {
              return JSON.parse(r.data)
                .map((report, i) => {
                  if (report.type === "data") {
                    return {
                      [i.toString()]: report.data
                        ? report.name == "checkbox"
                          ? report.data.toString()
                          : report.data
                        : "N/A",
                    };
                  }
                })
                .filter((item) => typeof item === "object" && item !== null);
            });

            setReportsHeader(headers);
            setReportsData(data);
            headers.length && data.length && exportBtn.current.link.click();
            setReports(response.data.reports);
            console.log("report_headers", headers);
            console.log("report_data", data);
          }
        }
      })
      .catch((error) => {
        // alert(error.message);
        toast("Something went wrong!", { type: "error" });
        setIsLoading(false);
        console.error("There was an error!", error);
      });
  };
  const handleProjectChange = (uuid) => {
    setProjectuuid(uuid);
  };

  const handleSurveyChange = (uuid) => {
    setSurveyuuid(uuid);
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    if (projectuuid) {
      getProjectSurveys();
    }
  }, [projectuuid]);

  return (
    <>
      <div className="flex flex-col items-center m-2">
        <h1 className="text text-3xl my-3 ml-2  text-blue-900">
          {/* Generate Report */}
        </h1>
        <p></p>
        <br />

        <div className=" w-10/12 mt-6 rounded-lg  divide-y">
          <div className="mb-6 bg-white rounded-lg p-2">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h1 className="text text-2xl font-bold my-3 ml-2  text-blue-900">
                  Reports
                </h1>
              </div>
              <div></div>
              <div></div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 p-6">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className={inputClass}
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 p-6">
              <select
                className={inputClass}
                onChange={(e) => handleProjectChange(e.target.value)}
              >
                <option value="">Select Project</option>
                {projects &&
                  projects.data &&
                  projects.data.map((option) => (
                    <option value={option.uuid}>{option.name}</option>
                  ))}
              </select>
              <select
                className={inputClass}
                onChange={(e) => handleSurveyChange(e.target.value)}
              >
                <option value="">Select Survey</option>
                {surveys &&
                  surveys.data &&
                  surveys.data.map((option) => (
                    <option value={option.uuid}>{option.name}</option>
                  ))}
              </select>
            </div>
            <div className="text-center mb-6">
              <br />
              <BasicButton
                disabled={!projectuuid || !surveyuuid || !startDate || !endDate}
                title={"GENERATE REPORT"}
                classes={"md:w-4/12 mt-0 p-4 h-14"}
                handleClick={generateReport}
              />
            </div>
          </div>
        </div>
      </div>
      {reportsHeader && reportsData && (
        <CSVLink
          ref={exportBtn}
          target="_blank"
          className="flex flex-row"
          headers={reportsHeader}
          data={reportsData}
          filename={`report-${new Date().toLocaleString()}.csv`}
        ></CSVLink>
      )}
      ;
    </>
  );
}

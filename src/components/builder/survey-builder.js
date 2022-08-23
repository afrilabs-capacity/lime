import BasicButton from "./drag-and-drop/widgets/components/buttons/basic-button.js";
import TopCards from "../../pages/dashboard/components/top-cards";
import RightNav from "../../components/layout/right-nav.js";
import Header from "../../components/layout/header.js";
import { Routes, Route, Link } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropZone from "./drag-and-drop/drop-zone.js";
import ToolBar from "./drag-and-drop/toolbar.js";
import { useParams } from "react-router-dom";
import * as variables from "./variables";
import { DndProvider } from "react-dnd";
import { useDrop } from "react-dnd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DemoBar from "./demobar";
import axios from "axios";
import { useBuilderStore } from "../../stores/builder";
import Chart from "react-apexcharts";

export default function Survey() {
  const initialTabData = {
    activeTab: 0,
    tabs: ["Questions", "Responses", "Analytics", "Distribute"],
  };

  const [tabData, setTabData] = useState(initialTabData);
  const [activeTab, setActiveTab] = useState(0);
  const { survey } = useBuilderStore((state) => state);
  useEffect(() => {
    setActiveTab(0);
  }, []);

  return (
    <>
      <div class="p-4">
        <div>
          <h1 className="text-5xl text-center my-2 mb-6 text-sky-900">
            {survey && survey.name}
          </h1>
          <div class="grid md:grid-cols-4 gap-4">
            {tabData.tabs.map((tab, i) => {
              {
                /* alert(`${activeTab} ${i}`); */
              }
              return (
                <BasicButton
                  title={tab}
                  classes={`cursor-pointer focus:outline-0 py-3 px-4 rounded-lg transition bg-blue-200 hover:bg-orange-300 text-blue-900 ${
                    activeTab == i
                      ? "bg-orange-600 text-white"
                      : "text-gray-500"
                  }`}
                  handleClick={() => setActiveTab(i)}
                />
              );
            })}
          </div>

          <div class="mt-4">
            {activeTab == 0 && <BuilderTools />}
            {activeTab == 1 && <SurveyResponses />}
            {activeTab == 2 && <Analytics />}
            {activeTab == 3 && <DistributeSurvey />}
          </div>
        </div>
      </div>
    </>
  );
}

export function BuilderTools() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div className="grid md:grid-cols-1">
          <div className="main-right col-span-2 bg-green">
            <div className="grid md:grid-cols-3 gap-4">
              <DropZone />
              <ToolBar />
            </div>

            {/* <TutorialApp /> */}
            {/* <DemoBar variables={variables} />
            <ReactFormBuilder url="/api/formdata" saveUrl="/api/formdata" /> */}
          </div>

          {/* <div className="main-left col-span-5 md:col-span-1 ">
            <RightNav />
          </div> */}
        </div>
      </div>
    </DndProvider>
  );
}

export function SurveyResponses() {
  let { surveyuuid } = useParams();
  const [responses, setResponses] = useState([]);
  const getResponses = () => {
    const url = "/api/survey/responses/" + surveyuuid;
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          if (response.data.responses) {
            setResponses(response.data.responses.data);
            // console.log("responses", response.data.responses.data);
          }
          //   console.log(response.data.series);
        }
      })
      .catch((error) => {
        alert(error.message);
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    getResponses();
  }, []);
  return (
    <>
      <br />
      <br />
      <div className="w-full overflow-x-scroll border">
        <table class="table-fixed border-gray-100">
          <thead>
            <tr className="divide-x">
              {responses.length
                ? JSON.parse(responses[0].data).map((data) => {
                    if (data.type === "data") {
                      return (
                        <th
                          dangerouslySetInnerHTML={{
                            __html: data.label,
                          }}
                          className="p-2 text-blue-900 text-sm font-normal"
                          style={{ width: "1%", whiteSpace: "nowrap" }}
                        ></th>
                      );
                    }
                  })
                : ""}
              <th className="p-2 text-blue-900 text-sm font-normal">
                Timestamp
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {responses.map((response, i) => {
              console.log("response loop", JSON.parse(response.data));
              return (
                <tr className="text-center divide-x border-gray-100">
                  {JSON.parse(response.data).map((data) => {
                    if (data.type === "data") {
                      {
                        /* if (data.name == "checkbox") {
                        console.log("checkbox mmm", data.data);
                      } */
                      }
                      return (
                        <td className="texm-sm">
                          {data.data
                            ? data.name == "checkbox"
                              ? data.data.toString()
                              : data.data
                            : "N/A"}
                        </td>
                      );
                    }
                  })}
                  <td className="texm-sm">{response.created_at}</td>
                </tr>
              );
              {
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function Analytics() {
  const defaultOptions = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  let { surveyuuid } = useParams();
  const [responses, setResponses] = useState([]);
  const [analytics, setAnalytics] = useState();
  // const [series, setSeries] = useState([44, 55, 13, 43, 22]);
  // const [options, setOptions] = useState(defaultOptions);

  const getResponses = () => {
    const url = "/api/survey/responses/" + surveyuuid;
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setAnalytics(response.data.analytics);
          setResponses(response.data.responses);
          // alert(JSON.stringify(analytics));
        }
      })
      .catch((error) => {
        alert(error.message);
        console.error("There was an error!", error);
      });
  };

  const ComposeChartData = ({ data, uuid, responses }) => {
    const options = {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
    let label = [];
    let series = [];
    Object.keys(data).map((item, i) => {
      if (i > 0) {
        series.push(data[item]);
        label.push(item);
      }
    });

    options.labels = label;
    // alert(JSON.stringify(defaultChartOptions.labels));
    return (
      <Chart
        key={uuid}
        options={options}
        series={series}
        type="pie"
        width={380}
      />
    );
  };

  useEffect(() => {
    getResponses();
  }, []);

  useEffect(() => {
    if (analytics) {
    }
  }, [analytics]);
  return (
    <>
      <div>
        <div className="text-center divide-x border-gray-100">
          {analytics &&
            Object.keys(analytics).map((keyparent, key) => {
              let mapData = defaultOptions;

              {
                /* alert(JSON.stringify(mapData)); */
              }

              return (
                <div className="my-2 bg-white p-4">
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: analytics[keyparent].label,
                    }}
                    className="text-2xl font-bold text-blue-900 text-left"
                  ></h1>
                  <div className="grid md:grid-cols-2">
                    <div>
                      {Object.keys(analytics[keyparent]).map((item, i) => {
                        console.log("test", item);
                        {
                          /* alert(responses.data.length); */
                        }
                        {
                          return (
                            i > 0 && (
                              <>
                                {" "}
                                <div className="text-center  border-gray-100 flex justify-between shadow p-2 my-1">
                                  <div>{item}</div>{" "}
                                  <div>
                                    {(analytics[keyparent][item] /
                                      responses.data.length) *
                                      100}
                                    % {analytics[keyparent][item]}
                                  </div>
                                </div>
                              </>
                            )
                          );
                        }
                      })}
                    </div>
                    {/* {alert(keyparent)} */}

                    <ComposeChartData
                      data={analytics[keyparent]}
                      uuid={keyparent}
                      responses={responses}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export function DistributeSurvey() {
  let { surveyuuid } = useParams();
  const [channel, setChannel] = useState(0);
  const [emailLists, setEmailLists] = useState([]);
  const [isBroadcasting, setIsBroacasting] = useState(false);

  const getEmailLists = () => {
    const url = "/api/email-list";

    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setEmailLists(response.data.data);
          //   window.location.href = `/create-email-list/${response.data.list.uuid}`;
        }
      })
      .catch((error) => {
        alert(error.message);
        console.error("There was an error!", error);
      });
  };

  const broadcastSurvey = (list) => {
    setIsBroacasting(true);
    const url = "/api/survey/distribute";
    axios
      .post(url, { survey_uuid: surveyuuid, list_uuid: list.uuid })
      .then((response) => {
        setIsBroacasting(false);
        if (response.status == 200) {
          toast("Survey queued for sending!", { type: "success" });
        }
      })
      .catch((error) => {
        alert(error.message);
        setIsBroacasting(false);
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    getEmailLists();
  }, []);
  return (
    <>
      <br />
      <br />
      {/* <div className="w-full overflow-x-scroll border">Responses</div> */}
      <div className="grid md:grid-cols-2 content-center">
        <div
          className={`border flex justify-center py-6 items-center cursor-pointer 
          ${channel == 0 ? "bg-gray-50 text-black border" : "bg-gray-200 "}`}
          onClick={() => setChannel(0)}
        >
          <span class="text-3xl">Email</span>
        </div>
        <div
          className={`border flex justify-center py-6 items-center cursor-pointer 
          ${channel == 1 ? "bg-gray-50  text-black border" : "bg-gray-200 "}`}
          onClick={() => setChannel(1)}
        >
          <span class="text-3xl">Paper Or Phone</span>
        </div>
      </div>

      {channel == 0 ? (
        <div className="flex flex-col items-center m-2">
          {/* <h1 className="text text-3xl  my-3 ml-2 text-blue-900">Contacts</h1>
          <p></p> */}
          <br />
          <SearchBar />

          <div className="w-full mt-6 rounded-lg divide-y">
            {emailLists.map((list, i) => (
              <div className="p-8 border-side border-sky-400 border-l-8 hover:border-sky-900 border-l-8 my-2 rounded-lg shadow cursor-pointer AsideBackground flex justify-between">
                <a href={`/email-list-single/${list.uuid}`}>
                  {" "}
                  <p className="text-lg">{list.name}</p>{" "}
                </a>
                <BasicButton
                  disabled={isBroadcasting}
                  icon={`fas fa-plus text-white`}
                  title={isBroadcasting ? "Sending.." : "SEND"}
                  classes={"mt-0 bg-sky-700"}
                  handleClick={() => broadcastSurvey(list)}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {" "}
          <br />
          <br />
          <div className="p-8 border-side border-sky-400 border-l-8 hover:border-sky-900 border-l-8 my-2 rounded-lg shadow cursor-pointer AsideBackground flex justify-between">
            <p className="text-lg">{`${window.location.protocol}//${window.location.host}/survey/share/${surveyuuid}`}</p>
            <BasicButton
              icon={`fas fa-plus text-white`}
              title={"COPY"}
              classes={"mt-0 bg-sky-700"}
              handleClick={() => null}
            />
          </div>
        </>
      )}
    </>
  );
}

export function SearchBar() {
  return "";
  // return (
  //   <div class="flex justify-center w-10/12">
  //     <div class="mb-3 xl:w-96">
  //       <div class="relative flex  items-stretch w-full mb-4">
  //         <input
  //           type="search"
  //           class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
  //           placeholder="Search"
  //           aria-label="Search"
  //           aria-describedby="button-addon2"
  //         />
  //         <button
  //           class="btn inline-block px-6 py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
  //           type="button"
  //           id="button-addon2"
  //         >
  //           <svg
  //             aria-hidden="true"
  //             focusable="false"
  //             data-prefix="fas"
  //             data-icon="search"
  //             class="w-4"
  //             role="img"
  //             xmlns="http://www.w3.org/2000/svg"
  //             viewBox="0 0 512 512"
  //           >
  //             <path
  //               fill="currentColor"
  //               d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
  //             ></path>
  //           </svg>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
}

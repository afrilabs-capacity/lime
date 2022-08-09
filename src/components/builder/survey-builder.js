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

  return (
    <>
      <div class="p-4">
        <div>
          <h1 className="text-5xl text-center my-2 mb-6">
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
                  classes={`cursor-pointer py-3 px-4 rounded-lg transition bg-blue-200 hover:bg-orange-300 text-blue-900 ${
                    activeTab == i
                      ? "bg-orange-400 text-white"
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
            {activeTab == 3 && <div>Content 4</div>}
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
  let { uuid } = useParams();
  const [responses, setResponses] = useState([]);
  const getResponses = () => {
    const url = "/api/survey/responses/" + uuid;
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
  let { uuid } = useParams();
  const [responses, setResponses] = useState([]);
  const [analytics, setAnalytics] = useState();
  const [series, setSeries] = useState([44, 55, 13, 43, 22]);
  const [options, setOptions] = useState(defaultOptions);

  const getResponses = () => {
    const url = "/api/survey/responses/" + uuid;
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
                      {" "}
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

                    <Chart
                      options={options}
                      series={series}
                      type="pie"
                      width={380}
                    />
                  </div>
                  {/* <div className="text-center divide-x border-gray-100 flex justify-between">
                      <div>Very Good</div> <div>8.6%</div>
                    </div>

                    <div className="text-center divide-x border-gray-100 flex justify-between">
                      <div>Good</div> <div>3%</div>
                    </div>

                    <div className="text-center divide-x border-gray-100 flex justify-between">
                      <div>Fair</div> <div>2.1%</div>
                    </div>

                    <div className="text-center divide-x border-gray-100 flex justify-between">
                      <div>Poor</div> <div>3.4%</div>
                    </div> */}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

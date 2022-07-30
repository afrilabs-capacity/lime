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

export default function Survey() {
  const initialTabData = {
    activeTab: 0,
    tabs: ["Questions", "Responses", "Analytics", "Distribute"],
  };

  const [tabData, setTabData] = useState(initialTabData);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div class="p-4">
        <div>
          <div class="grid md:grid-cols-4 gap-4">
            {tabData.tabs.map((tab, i) => {
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
            {activeTab == 2 && <div>Content 3</div>}
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
            console.log("responses", response.data.responses.data);
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
              {JSON.parse(responses[0].data).map((data) => {
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
              })}
            </tr>
          </thead>
          <tbody className="bg-white">
            {responses.map((response) => {
              console.log("response loop", JSON.parse(response.data));
              return (
                <tr className="text-center divide-x border-gray-100">
                  {JSON.parse(response.data).map((data) => {
                    if (data.type === "data") {
                      return <td>{data.data}</td>;
                    }
                  })}
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

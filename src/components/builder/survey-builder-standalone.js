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
import EmptyPage from "../section/empty-page.js";
import Pagination from "../pagination/pagination.js";
import AnimatedLoader from "../loader/loader.js";

export default function SurveyStandalone() {
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

  const disableedTabClasses = () => {
    return "bg-orange-500";
  };

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
                  classes={`cursor-pointer focus:outline-0 py-3 px-4 rounded-lg transition bg-sky-900 hover:bg-gray-600 ${
                    activeTab == i
                      ? "text-white bg-orange-500 hover:bg-orange-300"
                      : "text-gray-500 bg-gray-600"
                  }`}
                  handleClick={() => null}
                />
              );
            })}
          </div>

          <div class="mt-4">
            {activeTab == 0 && <BuilderTools />}
            {activeTab == 1 && <BuilderTools />}
            {activeTab == 2 && <BuilderTools />}
            {activeTab == 3 && <BuilderTools />}
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
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

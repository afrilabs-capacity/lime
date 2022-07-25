import BasicButton from "./drag-and-drop/widgets/components/buttons/basic-button.js";
import TopCards from "../../pages/dashboard/components/top-cards";
import RightNav from "../../components/layout/right-nav.js";
import Header from "../../components/layout/header.js";
import { Routes, Route, Link } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropZone from "./drag-and-drop/drop-zone.js";
import ToolBar from "./drag-and-drop/toolbar.js";
import * as variables from "./variables";
import { DndProvider } from "react-dnd";
import { useDrop } from "react-dnd";
import { useState } from "react";
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
                      ? "bg-orange-300 text-blue-900"
                      : "text-gray-500"
                  }`}
                  handleClick={() => setActiveTab(i)}
                />
              );
            })}
          </div>

          <div class="mt-4">
            {activeTab == 0 && <BuilderTools />}
            {activeTab == 1 && <div>Content 2</div>}
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

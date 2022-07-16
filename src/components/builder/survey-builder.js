import Header from "../../components/layout/header.js";
import RightNav from "../../components/layout/right-nav.js";
import { Routes, Route, Link } from "react-router-dom";
import TopCards from "../../pages/dashboard/components/top-cards";
import DemoBar from "./demobar";
import * as variables from "./variables";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
// import Board from "./drag-and-drop/index";
import { TutorialApp } from "./drag-and-drop/tutorial-app";
import DropZone from "./drag-and-drop/drop-zone.js";
import ToolBar from "./drag-and-drop/toolbar.js";
import axios from "axios";

export default function Survey() {
  return (
    <>
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
    </>
  );
}

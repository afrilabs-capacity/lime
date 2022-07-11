import "../master";
import Header from "../../components/layout/header.js";
import RightNav from "../../components/layout/right-nav.js";
import { Routes, Route, Link } from "react-router-dom";
import TopCards from "./components/top-cards";

export default function DashboardLayout() {
  return (
    <>
      {" "}
      <div>
        <Header />
        <div className="grid md:grid-cols-3">
          <div className="main-right col-span-2">
            <TopCards />
          </div>

          <div className="main-left col-span-5 md:col-span-1 ">
            <RightNav />
          </div>
        </div>
      </div>
    </>
  );
}

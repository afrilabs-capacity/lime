import { useState } from "react";
import { useBuilderStore } from "../../stores/builder";
import {
  isAdmin,
  isCollector,
  isResponsiveMode,
} from "../../utils/helper-functions";
export default function LeftNav() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { setActiveNavigationMenu, activeNavigationMenu } = useBuilderStore(
    (state) => state
  );

  const adminMenuItems = [
    {
      title: "Dashboard",
      icon: "fa-solid fa-gauge hover:text-white px-1",
      link: "/dashboard",
    },
    {
      title: "Surveys",
      icon: "fa-solid  fa-clipboard hover:text-white px-1",
      link: "/surveys",
    },
    {
      title: "Projects",
      icon: "fa-solid fa-tarp-droplet hover:text-white px-1",
      link: "/projects",
    },
    // {
    //   title: "Monitoring",
    //   icon: "fas fa-plus hover:text-white px-1",
    //   link: "/monitoring",
    // },
    {
      title: "Activity",
      icon: "fa-solid fa-clock hover:text-white px-1",
      link: "/activity",
    },
    // {
    //   title: "Messages",
    //   icon: "fa-solid fa-message hover:text-white px-1",
    //   link: "/messages",
    // },
    {
      title: "Users",
      icon: "fa-solid fa-user hover:text-white px-1",
      link: "/users",
    },
    {
      title: "Mailing",
      icon: "fas fa-plus hover:text-white px-1",
      link: "/email-list",
    },
    {
      title: "Logout",
      icon: "fa fa-power-off hover:text-white px-1",
      link: "/logout",
    },
  ];

  const collectorMenuItems = [
    {
      title: "Dashboard",
      icon: "fa-solid fa-gauge hover:text-white px-1",
      link: "/dashboard",
    },
    {
      title: "Surveys",
      icon: "fa-solid  fa-clipboard hover:text-white px-1",
      link: "/surveys",
    },

    {
      title: "Mailing",
      icon: "fas fa-plus hover:text-white px-1",
      link: "/email-list",
    },
    {
      title: "Logout",
      icon: "fa fa-power-off hover:text-white px-1",
      link: "/logout",
    },
  ];

  const goToLink = (tabIndex, link, title) => {
    localStorage.setItem("activeTab", tabIndex);
    localStorage.setItem("activeTabName", title);
    setActiveNavigationMenu(tabIndex);
    window.location.href = link;
  };

  const logout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_name");
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    window.location.href = "/login";
  };

  const menuItems = isAdmin() ? adminMenuItems : collectorMenuItems;

  return (
    <>
      <aside class="col-span-5 md:col-span-1 md:h-screen" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3  rounded  h-full  bg-repeat AsideBackground">
          {/* <p onClick={() => setShowSidebar((prev) => (prev = !prev))}>
            {" "}
            toggle sidebar
          </p>
          <p> {showSidebar ? "true" : "false"}</p> */}
          <div class="flex md:hidden flex-row justify-between w-full shadow p-2">
            <span>
              <img
                src={"/assets/backgrounds/lime_logo.png"}
                className="w-4/12"
              />
              {/* <p class=" mx-auto md:mx-0 text-sky-700 text-center text-xs w-5">
                LoftyInc Impact Monitoring and Evaluation
              </p> */}
            </span>

            <button
              onClick={() => setShowMobileMenu((showMenu) => !showMenu)}
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 border border-gray-500 shadow"
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center mb-4 hidden md:flex">
            {" "}
            <img src={"/assets/backgrounds/lime_logo.png"} className="w-4/12" />
            <p class=" mx-auto md:mx-0 text-sky-700 text-center text-xs">
              LoftyInc Impact Monitoring and Evaluation
            </p>
          </div>
          <ul
            className={`${
              !showMobileMenu && isResponsiveMode() ? "hidden" : "block"
            }`}
          >
            {menuItems.map((menu, i) => {
              if (menu.title !== "Logout") {
                return (
                  <li
                    onClick={() => goToLink(i, menu.link, menu.title)}
                    className={`flex items-center p-2 text-base font-normal  rounded-lg  hover:bg-sky-900 hover:text-white cursor-pointer ${
                      localStorage.getItem("activeTab") == i
                        ? "bg-sky-900 text-white"
                        : "text-gray-600"
                    }`}
                  >
                    <i className={`${menu.icon}`}></i>
                    <span class="ml-3">{menu.title}</span>
                  </li>
                );
              } else {
                return (
                  <li
                    onClick={() => logout()}
                    className={`flex items-center p-2 text-base font-normal  rounded-lg  hover:bg-sky-900 hover:text-white cursor-pointer ${
                      localStorage.getItem("activeTab") == i
                        ? "bg-sky-900 text-white"
                        : "text-gray-600"
                    }`}
                  >
                    <i className={`${menu.icon}`}></i>
                    <span class="ml-3">{menu.title}</span>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}

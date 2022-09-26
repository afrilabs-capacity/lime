import { useState } from "react";
import { useBuilderStore } from "../../stores/builder";
import { isAdmin, isCollector } from "../../utils/helper-functions";
export default function LeftNav() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

          <img src={"/assets/backgrounds/lime_logo.png"} />
          <ul class="space-y-2">
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

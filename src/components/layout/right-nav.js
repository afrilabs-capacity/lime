import axios from "axios";
import { useState, useEffect } from "react";
import {
  formatAMPM,
  getActivityResourceLink,
  API_BASE,
} from "../../utils/helper-functions";
import EmptyPage from "../section/empty-page";

export default function RightNav() {
  const [activities, setActivities] = useState([]);
  const getActivities = () => {
    const url = API_BASE + "/api/activities";
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setActivities(response.data.data);
        }
      })
      .catch((error) => {
        alert(error.message);
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    getActivities();
  }, []);
  return (
    <>
      <aside className="col-span-1 MainBackground">
        <section className="m-4 bg-white md:h-screen">
          <div class="w-full mb-6 lg:mb-0 m-2">
            <h1 class="sm:text-2xl text-lg  mb-2 text-blue-900">Activity</h1>
            <hr className="w-full" />
          </div>
          <div className="p-2">
            {activities.slice(0, 5).map((activity) => (
              <div
                className="flex justify-start py-2 items-center cursor-pointer divide-x px-1"
                onClick={() =>
                  (window.location.href = getActivityResourceLink(activity))
                }
              >
                <div>
                  {" "}
                  <span className="bg-orange-300 rounded-full px-2.5 py-1 text-white m-1">
                    {activity.model.split("")[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sky-900 mx-2 text-lg">{activity.event}</p>
                  <p className="text-xs mx-2">
                    {formatAMPM(new Date(activity.created_at))}
                  </p>
                  <div className="border bg-sky-100 p-1 ml-1 mt-1 rounded-lg">
                    <p className="text-sm">{activity.model_data.name}</p>
                  </div>
                </div>

                <></>
                <hr />
              </div>
            ))}
            {!activities.length && (
              <EmptyPage text={"Activities"} disablePluralize={true} />
            )}
            {/* <div className="text-center font-bold">
              {" "}
              <a href="/activity">View All</a>
            </div> */}
          </div>
        </section>
      </aside>
    </>
  );
}

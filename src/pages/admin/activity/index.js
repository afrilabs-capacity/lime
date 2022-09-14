import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AnimatedLoader from "../../../components/loader/loader";
import Pagination from "../../../components/pagination/pagination";
import EmptyPage from "../../../components/section/empty-page";
import {
  getActivityResourceLink,
  formatAMPM,
  API_BASE,
} from "../../../utils/helper-functions";
import axios from "axios";

export default function Activity() {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = API_BASE + "/api/activities";
  const getActivities = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setIsLoading(false);
          setActivities(response.data);
          //   window.location.href = `/create-email-list/${response.data.list.uuid}`;
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const doPagination = (page) => {
    if (activities.first_page_url) {
      setIsLoading(true);
      let queryString = activities.first_page_url.split("page=");
      //   setCurrentPage(page);
      axios
        .get(queryString[0] + "page=" + page)
        .then((res) => {
          setActivities(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    getActivities();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center m-2">
        <h1 className="text text-3xl  my-3 ml-2 text-blue-900">Activity</h1>
        <p></p>
        <br />
        <div className="flex justify-center md:justify-end m-2 w-10/12">
          {/* <a href="/new-email-list-name">
            <BasicButton
              icon={`fas fa-plus text-white`}
              title={"CREATE NEW LIST"}
              classes={"mt-0 bg-sky-700 w-full"}
              handleClick={() => null}
            />
          </a> */}
        </div>

        {!isLoading && (
          <div className="w-10/12 mt-6 rounded-lg divide-y">
            {activities.data &&
              activities.data.map((model, i) => (
                <div className="p-8 border-side border-sky-400 border-l-8 hover:border-sky-900 border-l-8 my-2 rounded-lg shadow cursor-pointer bg-white flex flex-col md:flex-row  md:justify-between">
                  <div className="flex flex-col md:flex-row  md:justify-between items-center gap-4">
                    {" "}
                    <p>
                      <span className="bg-orange-300 rounded-full px-2.5 py-1 text-white">
                        {model.model.split("")[0]}
                      </span>
                    </p>
                    <div>
                      {" "}
                      <p className="text-lg">{model.event}</p>
                      <p className="text-xs">
                        {formatAMPM(new Date(model.created_at))}
                      </p>
                      <div className="border bg-sky-100 p-1 mt-1 rounded-lg">
                        <p className="text-sm">{model.model_data.name}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <BasicButton
                      title={"VIEW"}
                      classes={"mt-0 bg-sky-700"}
                      handleClick={() =>
                        (window.location.href = getActivityResourceLink(model))
                      }
                    />{" "}
                  </div>
                </div>
              ))}
            {activities.data && !activities.data.length && (
              <EmptyPage text={"activity"} />
            )}
          </div>
        )}
        {activities.first_page_url && !isLoading && (
          <Pagination pagination={activities} doPagination={doPagination} />
        )}
      </div>
      {isLoading && <AnimatedLoader classes="items-start" />}
    </>
  );
}

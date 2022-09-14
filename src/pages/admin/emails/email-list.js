import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AnimatedLoader from "../../../components/loader/loader";
import Pagination from "../../../components/pagination/pagination";
import EmptyPage from "../../../components/section/empty-page";
import { API_BASE } from "../../../utils/helper-functions";
import axios from "axios";

export default function EmailList() {
  const [emailLists, setEmailLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = API_BASE + "/api/email-list";
  const getEmailLists = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setIsLoading(false);
          setEmailLists(response.data);
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
    if (emailLists.first_page_url) {
      setIsLoading(true);
      let queryString = emailLists.first_page_url.split("page=");
      //   setCurrentPage(page);
      axios
        .get(queryString[0] + "page=" + page)
        .then((res) => {
          setEmailLists(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    getEmailLists();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center m-2">
        <h1 className="text text-3xl  my-3 ml-2 text-blue-900">Lists</h1>
        <p></p>
        <br />
        <div className="flex justify-center md:justify-end m-2 w-10/12">
          <a href="/new-email-list-name">
            <BasicButton
              icon={`fas fa-plus text-white`}
              title={"CREATE NEW LIST"}
              classes={"mt-0 bg-sky-700 w-full"}
              handleClick={() => null}
            />
          </a>
        </div>

        {!isLoading && (
          <div className="w-10/12 mt-6 rounded-lg divide-y">
            {emailLists.data &&
              emailLists.data.map((list, i) => (
                <a href={`/email-list-single/${list.uuid}`}>
                  <div className="p-8 border-side border-sky-400 border-l-8 hover:border-sky-900 border-l-8 my-2 rounded-lg shadow cursor-pointer AsideBackground">
                    <p className="text-lg">{list.name}</p>
                  </div>
                </a>
              ))}
            {emailLists.data && !emailLists.data.length && (
              <EmptyPage text={"List"} />
            )}
          </div>
        )}
        {emailLists.first_page_url && !isLoading && (
          <Pagination pagination={emailLists} doPagination={doPagination} />
        )}
      </div>
      {isLoading && <AnimatedLoader classes="items-start" />}
    </>
  );
}

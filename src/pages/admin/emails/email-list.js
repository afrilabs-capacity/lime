import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EmailList() {
  const [emailLists, setEmailLists] = useState([]);
  const url = "/api/email-list";
  const getEmailLists = () => {
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setEmailLists(response.data.data);
          //   window.location.href = `/create-email-list/${response.data.list.uuid}`;
        }
      })
      .catch((error) => {
        alert(error.message);
        console.error("There was an error!", error);
      });
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
        <div className="flex justify-center md:justify-end m-2 w-10/12 ">
          <a href="/new-email-list-name">
            <BasicButton
              icon={`fas fa-plus text-white`}
              title={"CREATE NEW LIST"}
              classes={"mt-0 bg-sky-700 w-full"}
              handleClick={() => null}
            />
          </a>
        </div>
        <div className="w-10/12 mt-6 rounded-lg divide-y">
          {emailLists.map((list, i) => (
            <a href={`/email-list-single/${list.uuid}`}>
              <div className="p-8 border-side border-sky-400 border-l-8 hover:border-sky-900 border-l-8 my-2 rounded-lg shadow cursor-pointer AsideBackground">
                <p className="text-lg">{list.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

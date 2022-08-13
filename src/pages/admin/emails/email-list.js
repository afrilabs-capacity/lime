import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { useState } from "react";

export default function EmailList() {
  const [emailLists, setEmailLists] = useState([
    "Mailing List 1",
    "Mailing List 2",
    "Mailing List 3",
    "Mailing List 4",
    "Mailing List 5",
    "Mailing List 6",
    "Mailing List 7",
    "Mailing List 8",
    "Mailing List 9",
    "Mailing List 10",
  ]);
  return (
    <>
      <div className="flex flex-col items-center m-2">
        <h1 class="text-2xl text-center mt-6">Mailing List</h1>
        <p></p>
        <br />
        <div className="flex justify-end m-2 w-10/12 ">
          <div className="w-full md:w-3/12 bg-sky-700 rounded-lg text-center flex justify-center md:justify-end items-center px-1">
            <i class="fas fa-plus text-white"></i>
            <a href="/new-email-list-name">
              <BasicButton
                title={"CREATE NEW LIST"}
                classes={"mt-0 bg-sky-700"}
                handleClick={() => null}
              />
            </a>
          </div>
        </div>
        <div className="bg-white w-10/12 mt-6 rounded-lg  divide-y">
          {emailLists.map((list, i) => (
            <div className="flex justify-between p-2">
              <div>
                <p className="p-2">{list}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <p> emails (50) </p>
                <BasicButton
                  title={"DELETE"}
                  classes={"mt-0 bg-red-700"}
                  handleClick={() => null}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

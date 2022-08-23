import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EmailListSingle() {
  let { listuuid } = useParams();
  const [emailList, seteEmailList] = useState({});
  const url = "/api/email-list/" + listuuid;

  const getEmails = () => {
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          seteEmailList(response.data.list);
          //   window.location.href = `/create-email-list/${response.data.list.uuid}`;
        }
      })
      .catch((error) => {
        alert(error.message);
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    getEmails();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center m-2">
        <h1 className="text text-3xl  my-3 mt-6 ml-2  text-blue-900">
          {emailList.name}
        </h1>
        <p></p>
        <br />

        <div className="bg-white w-10/12 mt-6 rounded-lg  divide-y">
          {emailList &&
            emailList.contacts &&
            emailList.contacts.map((contact, i) => (
              <div className="flex justify-between p-2">
                <div>
                  <p className="p-2">{contact.email}</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-4">
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

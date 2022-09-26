import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import AnimatedLoader from "../../../components/loader/loader";
import Pagination from "../../../components/pagination/pagination";
import EmptyPage from "../../../components/section/empty-page";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { API_BASE, isAdmin } from "../../../utils/helper-functions";
import axios from "axios";

export default function EmailListSingle() {
  let { listuuid } = useParams();
  let [isDeleting, setIsDeleting] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getContacts = () => {
    const url = API_BASE + "/api/email-list/" + listuuid + "/contacts";
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        if (response.status == 200) {
          setContacts(response.data);
          //   window.location.href = `/create-email-list/${response.data.list.uuid}`;
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const deleteContact = (contactuuid) => {
    setIsDeleting(true);
    const url = API_BASE + "/api/email-list/delete/contact/" + contactuuid;
    axios
      .delete(url)
      .then((response) => {
        if (response.status == 200) {
          setIsDeleting(false);
          getContacts();
          //   window.location.href = `/create-email-list/${response.data.list.uuid}`;
        }
      })
      .catch((error) => {
        toast("Something went wrong!", { type: "error" });
        setIsDeleting(false);
        console.error("There was an error!", error);
      });
  };

  const doPagination = (page) => {
    if (contacts.first_page_url) {
      setIsLoading(true);
      let queryString = contacts.first_page_url.split("page=");
      //   setCurrentPage(page);
      axios
        .get(queryString[0] + "page=" + page)
        .then((res) => {
          setContacts(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    getContacts();
    // alert(contacts.data ? "true" : "false");
  }, []);

  return (
    <>
      <div className="flex flex-col items-center m-2">
        <h1 className="text text-3xl  my-3 mt-6 ml-2  text-blue-900">
          {/* {contacts.list_name && contacts.list_name} */}
        </h1>
        <p></p>
        <br />

        {!isLoading && (
          <div className="bg-white w-10/12 mt-6 rounded-lg  divide-y">
            {contacts &&
              contacts.data &&
              contacts.data.map((contact, i) => (
                <div className="flex justify-between p-2">
                  <div>
                    <p className="p-2">{contact.email}</p>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    {isAdmin() && (
                      <BasicButton
                        disabled={isDeleting}
                        title={isDeleting ? "Deleting..." : "DELETE"}
                        classes={"mt-0 bg-red-700"}
                        handleClick={() => deleteContact(contact.uuid)}
                      />
                    )}
                  </div>
                </div>
              ))}
            {contacts.data && !contacts.data.length && (
              <EmptyPage text={"contact"} />
            )}
          </div>
        )}
        {contacts.first_page_url && !isLoading && (
          <Pagination pagination={contacts} doPagination={doPagination} />
        )}
      </div>
      {isLoading && <AnimatedLoader />}
    </>
  );
}

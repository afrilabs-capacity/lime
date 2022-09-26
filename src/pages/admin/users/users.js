import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { useState, useEffect } from "react";
import EmptyPage from "../../../components/section/empty-page";
import Pagination from "../../../components/pagination/pagination";
import AnimatedLoader from "../../../components/loader/loader";
import {
  API_BASE,
  shouldRenderEmptyPage,
  authHeader,
} from "../../../utils/helper-functions";
import { toast } from "react-toastify";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [paginationData, setPaginationData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const url = API_BASE + "/api/users";
  const getUsers = () => {
    setIsLoading(true);

    axios
      .request({
        method: "get",
        headers: authHeader(),
        url: url,
      })
      .then((response) => {
        if (response.status == 200) {
          setIsLoading(false);
          setUsers(response.data);
          //   window.location.href = `/create-email-list/${response.data.list.uuid}`;
        }
      })
      .catch((error) => {
        toast("Something went wrong!", { type: "error" });
        setIsLoading(false);
        console.error("There was an error!", error);
      });
  };

  const doPagination = (page) => {
    if (users.first_page_url) {
      setIsLoading(true);
      let queryString = users.first_page_url.split("page=");
      //   setCurrentPage(page);

      axios
        .request({
          method: "get",
          headers: authHeader(),
          url: queryString[0] + "page=" + page,
        })
        .then((res) => {
          setUsers(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  };

  const deleteUser = (user) => {
    const url = API_BASE + "/api/user/delete/" + user.uuid;
    setIsDeleting(true);
    axios
      .delete(url)
      .then((response) => {
        setIsDeleting(false);
        if (response.status == 200) {
          getUsers();
          toast("User Deleted", { type: "success" });
        }
      })
      .catch((error) => {
        // alert(error.message);
        toast("Something went wrong!", { type: "error" });
        setIsDeleting(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      {!isLoading && (
        <div className="flex flex-col items-center m-2">
          <h1 className="text text-3xl my-3 mt-6 ml-2 text-blue-900">Users</h1>
          <p></p>
          <br />
          <div className="flex justify-center md:justify-end m-2 w-10/12">
            <a href="/new-user">
              <BasicButton
                icon={`fas fa-plus text-white`}
                title={"CREATE USER"}
                classes={"mt-0 bg-sky-700 w-full"}
                handleClick={() => null}
              />
            </a>
          </div>
          <div className="w-10/12 mt-6 rounded-lg divide-y">
            {users.data &&
              users.data.map((user, i) => (
                <div className="p-8 shadow border-side border-sky-400 border-l-8 hover:border-sky-900 border-l-8 my-2 rounded-lg  cursor-pointer AsideBackground relative flex flex-col md:flex-row items-center md:justify-between gap-4">
                  <div>
                    <p className="text-lg">{user.name}</p>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
                    <a href={`/user/${user.uuid}`}>
                      <BasicButton
                        disabled={isDeleting}
                        title={"VIEW"}
                        classes={"mt-0 bg-sky-700 w-full"}
                        handleClick={() => null}
                      />
                    </a>
                    <BasicButton
                      disabled={isDeleting}
                      title={isDeleting ? "Deleting.." : "DELETE"}
                      classes={
                        "mt-0 bg-sky-700 w-full bg-red-500 hover:bg-red-300 "
                      }
                      handleClick={() => deleteUser(user)}
                    />
                  </div>
                </div>
              ))}
            {shouldRenderEmptyPage(users) && <EmptyPage text={"User"} />}
          </div>
          {users.first_page_url && !isLoading && (
            <Pagination pagination={users} doPagination={doPagination} />
          )}
        </div>
      )}

      {isLoading && <AnimatedLoader />}
    </>
  );
}

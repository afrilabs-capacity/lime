import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import TextField from "../../../components/builder/drag-and-drop/widgets/components/input/textfield";
import { forwardRef, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { API_BASE } from "../../../utils/helper-functions";
import axios from "axios";

export default function AttachSurveyUserModal({
  modalOpen,
  hideModal,
  surveyuuid,
  action,
  surveyUsers,
}) {
  const [users, setUsers] = useState([]);
  const [isAttaching, setIsAttaching] = useState(false);

  const getDetachedUsers = () => {
    const url = API_BASE + `/api/surveys/detached/survey/${surveyuuid}/users`;
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setUsers(response.data.users.data);
          //   alert(JSON.stringify(response.data.surveys.data));
          //   window.location.href = `/create-email-list/${response.data.list.uuid}`;
        }
      })
      .catch((error) => {
        // alert(error.message);
        console.error("There was an error!", error);
      });
  };

  const attachUser = (useruuid) => {
    setIsAttaching(true);
    const url = API_BASE + "/api/survey/attach/user";

    axios
      .post(url, { useruuid: useruuid, surveyuuid: surveyuuid })
      .then((response) => {
        setIsAttaching(false);
        if (response.status == 200) {
          toast("User attached successfully!", { type: "success" });
          action();
        }
      })
      .catch((error) => {
        setIsAttaching(false);
        // alert(error.message);
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    getDetachedUsers();
  }, [surveyUsers]);

  return (
    <div
      className={`absolute z-50 overflow-y-auto top-0 w-full left-0 ${
        modalOpen ? "" : "hidden"
      } id="modal"`}
    >
      <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0 bg-">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>

        <div
          class="inline-block align-center bg-white rounded-lg text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle md:w-6/12 h-4/12 "
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col justify-center">
            {/* modal body */}
            <h1 className="text text-3xl my-3 ml-2  text-blue-900">
              Attach User(s)
            </h1>

            {/* <StripeForm book={book} /> */}
            <div className="w-10/12 mt-6 rounded-lg divide-y">
              {users &&
                users.map((user, i) => (
                  <div className="p-4 border-side border-sky-400 border-l-8 hover:border-sky-900 border-l-8 my-2 rounded-lg shadow cursor-pointer AsideBackground flex justify-between">
                    <p className="text-lg">{user.name}</p>
                    <BasicButton
                      disabled={isAttaching}
                      icon={`fas fa-plus text-white`}
                      title={isAttaching ? "Attaching..." : "ATTACH"}
                      classes={"mt-0 bg-sky-700"}
                      handleClick={() => attachUser(user.uuid)}
                    />
                  </div>
                ))}
            </div>

            {/* modal body */}
          </div>
          <div class="bg-gray-200 px-4 py-3 flex justify-between">
            {/* <div className="flex justify-center">
              <BasicButton title={`Ad-Free $${book.price}`} />
            </div> */}
            <button
              type="button"
              class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
              onClick={() => hideModal()}
            >
              <i class="fas fa-times"></i> Close
            </button>
            {/* <button
                type="button"
                class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
              >
                <i class="fas fa-plus"></i> Create
              </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

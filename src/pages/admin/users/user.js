import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import TextField from "../../../components/builder/drag-and-drop/widgets/components/input/textfield";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE } from "../../../utils/helper-functions";
import { toast } from "react-toastify";
import axios from "axios";

export default function User() {
  let { uuid } = useParams();
  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const dropdownStyle = ` 
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`;

  const getUser = () => {
    const url = API_BASE + "/api/user/" + uuid;
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setUser((prev) => ({
            ...prev,
            name: response.data.user.name,
            email: response.data.user.email,
          }));

          setSelectedRoles((prev) =>
            response.data.user.roles.map((role) => ({ ...role, checked: true }))
          );

          setUserData(response.data.user);
          //   response.data.user.roles.map((role) => {
          //     selectedRoles.push(role.id);
          //   });
        }
      })
      .catch((error) => {
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const getRoles = () => {
    const url = API_BASE + "/api/roles";
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200) {
          setRoles(response.data.roles);
          //   window.location.href = `/create-email-list/${response.data.list.uuid}`;
        }
      })
      .catch((error) => {
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const updateUser = () => {
    const url = API_BASE + "/api/user/update";
    const payload = {
      ...user,
      roles: selectedRoles
        .filter((role) => role.checked)
        .map((role) => role.id),
      user_uuid: uuid,
    };
    axios
      .post(url, payload)
      .then((response) => {
        if (response.status == 200) {
          toast("Updated!", { type: "success" });
          getUser();
          //   window.location.href = `/user/${response.data.user.id}`;
        }
      })
      .catch((error) => {
        toast("Something went wrong!", { type: "error" });
        console.error("There was an error!", error);
      });
  };

  const updateUserObj = (e, field) => {
    setUser((user) => ({ ...user, [field]: e.target.value }));
  };

  const canCreate = () => {
    const test = user.name && user.email;

    if (user.password && user.password !== user.confirm_password) {
      return false;
    }
    return test;
  };

  const roleExistsInSelected = (value) => {
    return selectedRoles.filter((role) => role.id == value).length
      ? true
      : false;
  };

  const handleRoleChange = (e) => {
    const { value, checked } = e.target;

    if (selectedRoles.length > 0 && roleExistsInSelected(value)) {
      const shpuldCheckOrUncheck = selectedRoles.map((role) => {
        if (checked && role.id == value) {
          return { ...role, checked: true };
        } else if (!checked && role.id == value) {
          return { ...role, checked: false };
        }

        return role;
      });
      setSelectedRoles(shpuldCheckOrUncheck);
    } else if (checked && !roleExistsInSelected(value)) {
      console.log("Empty selected roles or row not exists in selected");
      roles
        .filter((role) => role.id == value)
        .map((role) =>
          setSelectedRoles((prev) => [
            ...prev,
            {
              ...role,
              checked: true,
            },
          ])
        );
    }
  };

  useEffect(() => {
    console.log("sel roles", selectedRoles);
  }, [selectedRoles]);

  useEffect(() => {
    getRoles();
    getUser();
  }, []);

  useEffect(() => {
    if (canCreate()) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
    // alert(JSON.stringify(selectedRoles));
  }, [user]);

  return (
    <>
      <div className="flex flex-col items-center m-2">
        <h1 className="text text-3xl my-3 ml-2  text-blue-900">Update User</h1>

        <br />

        <div className=" w-10/12 mt-6 rounded-lg  divide-y">
          <div className="mb-6 bg-white rounded-lg p-2">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <h1 className="text text-2xl font-bold my-3 ml-2  text-blue-900">
                {/* Manage User */}
              </h1>
              <div>
                {/* <BasicButton
                  title={"ADD USER"}
                  classes={"mt-0 bg-sky-900 mx-2"}
                  handleClick={() => null}
                />
                <BasicButton
                  title={"DELETE USER"}
                  classes={"mt-0 bg-red-700"}
                  handleClick={() => null}
                /> */}
              </div>
            </div>
            <div className="my-6 W-5/12">
              <div className="flex flex-col justify-center items-center"></div>
              <div className="p-2">
                {!user.name && <span className="text-red-500">*</span>}

                <label> Name</label>
                <TextField
                  placeholder={"name"}
                  field="name"
                  widget={null}
                  handleChange={updateUserObj}
                  value={user.name}
                />
              </div>
              <div className="p-2">
                {!user.email && <span className="text-red-500">*</span>}

                <label> Email</label>
                <TextField
                  placeholder={"email"}
                  field="email"
                  widget={null}
                  handleChange={updateUserObj}
                  value={user.email}
                />
              </div>
              <div className="p-2">
                {!user.password && <span className="text-red-500">*</span>}

                <label> Password</label>
                <TextField
                  placeholder={"password"}
                  field="password"
                  widget={null}
                  type="password"
                  handleChange={updateUserObj}
                />
                {user.password && user.password.length < 5 && (
                  <span className="text-red-500">
                    Password must be 5 characters or more
                  </span>
                )}
              </div>
              <div className="p-2">
                {!user.confirm_password && (
                  <span className="text-red-500">*</span>
                )}

                <label> Confirm Password</label>
                <TextField
                  placeholder={"Confirm Password"}
                  type="password"
                  field="confirm_password"
                  handleChange={updateUserObj}
                />
                <p>
                  {user.password &&
                    user.confirm_password &&
                    user.password != user.confirm_password && (
                      <span className="text-red-500">Password mismatch</span>
                    )}
                </p>
              </div>
              <div className="flex justify-between p-2 items-center">
                <div className="p-0 bg-white">
                  <div className="">
                    {/* <span className="font-bold">Q. </span> */}
                    <label
                      for="exampleFormControlInput1"
                      class="form-label inline-block  text-gray-700 mr-2"
                    >
                      Add Role(s)
                    </label>
                    {/* widget content start */}
                    <div className="bg-white py-2">
                      <div className="flex justify-around gap-4" field="roles">
                        {/* widget content start */}
                        {userData.roles &&
                          roles.map((role, i) => {
                            return (
                              <div>
                                <div class="flex items-center mb-4">
                                  <input
                                    defaultChecked={
                                      selectedRoles.length
                                        ? selectedRoles.filter(
                                            (sRole) => sRole.id == role.id
                                          ).length
                                          ? true
                                          : false
                                        : false
                                    }
                                    onChange={handleRoleChange}
                                    id="default-checkbox"
                                    type="checkbox"
                                    value={role.id}
                                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    for="default-checkbox"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    {role.name}
                                  </label>
                                </div>
                              </div>
                            );
                          })}

                        {/* {roles.map((role) => {
                          return (
                            <div>
                              <div class="flex items-center mb-4">
                                <input
                                  checked
                                  id="default-checkbox"
                                  type="checkbox"
                                  value={role.id}
                                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="default-checkbox"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  {role.name}
                                </label>
                              </div>
                            </div>
                          );
                        })} */}
                        {/* widget content end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2 flex justify-end">
                <BasicButton
                  disabled={!canSubmit}
                  title={"UPDATE USER"}
                  classes={"mt-0 bg-sky-700 w-full"}
                  handleClick={updateUser}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import TextField from "../../../components/builder/drag-and-drop/widgets/components/input/textfield";
import { toast } from "react-toastify";

import axios from "axios";

export default function CreateEmailList() {
  const [name, setName] = useState("");
  const [fileAsset, setFileAsset] = useState("mm");
  const [publisherId, setPublisherId] = useState("");
  const [fileSelected, setFileSelected] = useState("");
  const [selectedFileType, setSelectedFileType] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  let { listuuid } = useParams();

  const uploadList = () => {
    setIsUploading(true);
    const url = "/api/emaill-list/import";
    let formData = new FormData();
    // formData.append("user_uuid", useruuid);
    formData.append("list_uuid", listuuid);
    formData.append("file", fileSelected);
    // alert(url);
    axios
      .post(url, formData)
      .then((response) => {
        setIsUploading(false);
        if (response.status == 200) {
          toast("Upload Successful!", { type: "success" });
          window.location.href = `/email-list-single/${listuuid}`;
        }
      })
      .catch((error) => {
        setIsUploading(false);
        alert(error.message);
        console.error("There was an error!", error);
      });
  };

  const uploadCover = (e) => {
    let [file] = e.target.files;
    if (file) {
      //   if (file["type"].includes("pdf")) {
      //     setSelectedFileType("pdf");
      //     setFileSelected(file);
      //   } else {
      //     setSelectedFileType("image");
      //     setPreviewImage(URL.createObjectURL(file));
      //     setFileSelected(file);
      //   }

      setFileSelected(file);
      //   setFileSelected(URL.createObjectURL(file));
      //   previewImageRef.src = URL.createObjectURL(file);
      //   console.log("file", file["type"]);
      //   setFileAsset(file);
      //   const image = getBase64(file);
      //   image.then((res) => {
      //     // console.log("My image", res);
      //   });
    }
  };

  const removeCover = () => {
    setFileSelected("");
    setFileAsset("");
    setPreviewImage("");
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleNameChange = (name) => {
    setName(name);
  };

  useEffect(() => {
    // setPublisherId(userId);
    // if (!isAdmin()) {
    //   window.location.href = "/";
    // }
  }, []);
  return (
    <>
      <div className="flex flex-col items-center m-2 bg-white">
        <h1 className="text text-3xl font-bold my-3 ml-2  text-blue-900">
          Upload List
        </h1>
        <p></p>
        <br />
        {/* <div className="flex justify-end m-2 w-10/12 ">
          <div className="w-full md:w-3/12 bg-sky-700 rounded-lg text-center flex justify-center md:justify-end items-center px-1">
            <i class="fas fa-plus text-white"></i>
            <a href="/new-survey">
              <BasicButton
                title={"CREATE NEW LIST"}
                classes={"mt-0 bg-sky-700"}
                handleClick={() => null}
              />
            </a>
          </div>
        </div> */}

        {/* upload box */}

        <div className="w-6/12 flex flex-col justify-center items-center gap-4 mt-8">
          <div className="w-full  p-4">
            <div className="m-2 text-center">
              <label className="text-black m-2">Upload File</label>
              <div className="flex justify-center my-2">
                {!fileSelected && (
                  <div className="w-32 h-32  border rounded-full dotted border-color-black-500 p-2">
                    <div className="flex flex-col justify-center  h-full">
                      <i class="fa fa-plus cursor-pointer text-green-500"></i>
                      <p className="text-xs">Click to upload</p>
                      <p className="text-xs"> (Excel,csv)</p>
                      <label className="my-2">
                        <input
                          type="file"
                          onChange={(e) => uploadCover(e)}
                          class="text-sm 
                        text-grey-500
                        file:mr-2
                        file:py-2
                        file:px-2
                        file:rounded-full
                        file:border-0
                        file:text-md
                        file:font-semibold
                        file:text-white
                        file:bg-gradient-to-r
                        file:from-blue-600
                        file:to-amber-600
                        hover:file:cursor-pointer
                        hover:file:opacity-80"
                        />
                      </label>
                      {/* <input type="file" onChange={(e) => uploadCover(e)} /> */}
                    </div>
                  </div>
                )}

                {fileSelected && (
                  <div className="w-32 h-32  p-2 relative  border rounded-full dotted border-color-black-500">
                    <img src={"/excel.png"} className="w-full" />
                    <div
                      className="rounded rounded-full p-0 top-0 right-0 absolute px-1 cursor-pointer"
                      onClick={() => removeCover()}
                    >
                      <i class="fa fa-times-circle text-red-500  z-50 text-2xl"></i>
                    </div>
                  </div>
                )}
              </div>
              {/* <TextField
              classes={"p-6"}
              placeholder={"Email.."}
              handleChange={handleEmailChange}
            /> */}
            </div>

            <div className="my-8 text-center">
              <br />
              <BasicButton
                disabled={!fileSelected || isUploading}
                title={isUploading ? "Uploading..." : "Upload"}
                classes={"p-6 w-9/12 mt-4"}
                handleClick={uploadList}
              />
            </div>
          </div>
          <div></div>
        </div>
        {/* upload box */}
      </div>
    </>
  );
}

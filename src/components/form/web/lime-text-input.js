import { useBuilderStore } from "../../../stores/builder.js";
import { useState, useEffect } from "react";
import TextField from "../../../components/builder/drag-and-drop/widgets/components/input/textfield";
import {
  getActiveWidgetLabel,
  getActiveWidgetRequired,
} from "../../../utils/helper-functions.js";

export function LimeInputWeb({ item }) {
  const [disableFields, setDisabledFields] = useState(false);
  const {
    showWidgetEditorModal,
    currentEditingWidget,
    updateWebWidgetField,
    widgets,
  } = useBuilderStore((state) => state);
  const widgetRquired = getActiveWidgetRequired(item, widgets);

  useEffect(
    () => {
      //   alert(widgetRquired);
    },
    //   useBuilderStore.subscribe((currentEditingItem) =>
    //     alert(currentEditingItem.currentEditingWidget.unique_key)
    //   ),
    []
  );

  return item !== null ? (
    <div className="p-0 bg-white">
      {/* {JSON.stringify(item.unique_key)} */}

      <div className="p-2">
        {/* widget content start */}
        <span className="font-bold"></span>
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700 mr-2"
          dangerouslySetInnerHTML={{
            __html: getActiveWidgetLabel(currentEditingWidget, widgets, item),
          }}
        ></label>{" "}
        {widgetRquired && (
          <p>
            <span className="rounded bg-red-700 text-white px-1 pb-1 text-xs">
              required
            </span>
          </p>
        )}
        <fieldset disabled={disableFields}>
          <input
            type="text"
            readonly
            className="
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
        mt-1
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput1"
            placeholder={`Text here...`}
            onChange={(e) => updateWebWidgetField(item, "data", e.target.value)}
          />
          {/* <TextField placeholder={"Text here..."} /> */}
        </fieldset>
        {/* widget content end */}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default LimeInputWeb;

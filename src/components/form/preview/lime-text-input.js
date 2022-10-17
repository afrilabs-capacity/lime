import { useBuilderStore } from "../../../stores/builder.js";
import { useState, useEffect } from "react";
import TextField from "../../../components/builder/drag-and-drop/widgets/components/input/textfield";
import {
  getActiveWidgetLabel,
  getActiveWidgetRequired,
} from "../../../utils/helper-functions.js";

export function LimeInputPreview({ item }) {
  const [disableFields, setDisabledFields] = useState(false);
  const { showWidgetEditorModal, currentEditingWidget, widgets } =
    useBuilderStore((state) => state);
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
        <span className="font-bold">Q. </span>
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700 mr-2"
          dangerouslySetInnerHTML={{
            __html: getActiveWidgetLabel(currentEditingWidget, widgets, item),
          }}
        ></label>{" "}
        {widgetRquired && (
          <span className="rounded bg-red-700 text-white px-1 pb-1 text-xs m-2">
            required
          </span>
        )}
        <fieldset disabled={disableFields}>
          <TextField placeholder={"Text here..."} />
        </fieldset>
        {/* widget content end */}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default LimeInputPreview;

import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemTypes } from "../item-types.js";
import { useBuilderStore } from "../../../../stores/builder.js";
import { useState, useEffect } from "react";
import TextField from "./components/input/textfield.js";
import {
  getActiveWidgetLabel,
  getActiveWidgetRequired,
} from "../../../../utils/helper-functions.js";
import WidgetAction from "./components/action/widget-action.js";

export function LimeInput({ item }) {
  const [disableFields, setDisabledFields] = useState(true);
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
    <div className="p-2 bg-white">
      {/* {JSON.stringify(item.unique_key)} */}
      <div className="flex justify-between">
        <div>
          <span className="rounded bg-slate-700 text-white p-1 text-xs">
            Text Input
          </span>
        </div>
        <div className="m-2">
          <WidgetAction item={item} />
        </div>
      </div>
      <div className="p-2">
        {/* widget content start */}
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700 mr-2"
          dangerouslySetInnerHTML={{
            __html: getActiveWidgetLabel(currentEditingWidget, widgets, item),
          }}
        ></label>{" "}
        {widgetRquired && (
          <span className="rounded bg-red-700 text-white px-1 pb-1 text-xs">
            required
          </span>
        )}
        <fieldset disabled={disableFields}>
          <TextField placeholder={"Text here.."} />
        </fieldset>
        {/* widget content end */}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default LimeInput;

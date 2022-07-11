import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemTypes } from "../item-types.js";
import { useBuilderStore } from "../../../../stores/builder.js";
import { useState, useEffect } from "react";
import {
  getActiveWidgetLabel,
  getActiveWidgetRequired,
} from "../../../../utils/helper-functions.js";

export function LimeMultiLine({ item }) {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );
  const [disableFields, setDisabledFields] = useState(true);
  const { showWidgetEditorModal, currentEditingWidget, widgets } =
    useBuilderStore((state) => state);
  const widgetRquired = getActiveWidgetRequired(item, widgets);

  return (
    <div className="p-2 bg-white">
      <div className="flex justify-between">
        <div>
          <span className="rounded bg-slate-700 text-white p-1 text-xs">
            Multiline
          </span>
        </div>
        <div className="m-2">
          {" "}
          <i className="fa fa-trash cursor-pointer" aria-hidden="true"></i>
          <i
            className="fas fa-edit mx-2 cursor-pointer"
            onClick={() => showWidgetEditorModal(item)}
          ></i>
          <i className="fas fa-grip-vertical cursor-pointer"></i>
        </div>
      </div>
      <div className="p-2">
        {/* widget content start */}
        <fieldset disabled="true">
          <label
            for="exampleFormControlInput1"
            class="form-label inline-block mb-2 text-gray-700"
            dangerouslySetInnerHTML={{
              __html: getActiveWidgetLabel(currentEditingWidget, widgets, item),
            }}
          ></label>{" "}
          {widgetRquired && (
            <span className="rounded bg-red-700 text-white px-1 pb-1 text-xs">
              required
            </span>
          )}
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
        </fieldset>
        {/* widget content end */}
      </div>
    </div>
  );
}

export default LimeMultiLine;

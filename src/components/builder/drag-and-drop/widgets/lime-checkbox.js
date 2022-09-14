import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemTypes } from "../item-types.js";
import { useBuilderStore } from "../../../../stores/builder.js";
import { useState, useEffect } from "react";
import {
  getActiveWidgetLabel,
  getActiveWidgetRequired,
} from "../../../../utils/helper-functions.js";
import WidgetAction from "./components/action/widget-action.js";
export function LimeCheckbox({ item }) {
  const [disableFields, setDisabledFields] = useState(true);
  const { showWidgetEditorModal, currentEditingItem, widgets } =
    useBuilderStore((state) => state);
  const widgetRquired = getActiveWidgetRequired(item, widgets);

  return (
    <div className="p-2 bg-white">
      <div className="flex justify-between">
        <div>
          <span className="rounded bg-slate-700 text-white p-1 text-xs">
            Checkbox
          </span>
        </div>
        <div className="m-2">
          <WidgetAction item={item} />
        </div>
      </div>
      <div className="p-2">
        {" "}
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700 mr-2"
          dangerouslySetInnerHTML={{
            __html: getActiveWidgetLabel(currentEditingItem, widgets, item),
          }}
        ></label>
        {widgetRquired && (
          <span className="rounded bg-red-700 text-white px-1 pb-1 text-xs">
            required
          </span>
        )}
        {/* widget content start */}
        <div className="p-2 bg-white">
          <div className="p-2">
            {/* widget content start */}{" "}
            <fieldset disabled={disableFields}>
              {item.options.map((option) => (
                <div>
                  {" "}
                  {/* <label
                    for="exampleFormControlInput1"
                    class="form-label inline-block mb-2 text-gray-700"
                  ></label> */}
                  <div class="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value={option.value}
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {option.option}
                    </label>
                  </div>
                </div>
              ))}
            </fieldset>
            {/* widget content end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimeCheckbox;

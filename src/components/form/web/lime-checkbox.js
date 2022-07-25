import { useBuilderStore } from "../../../stores/builder.js";
import { useState, useEffect } from "react";
import {
  getActiveWidgetLabel,
  getActiveWidgetRequired,
} from "../../../utils/helper-functions.js";
export function LimeCheckboxWeb({ item }) {
  const [disableFields, setDisabledFields] = useState(true);
  const {
    showWidgetEditorModal,
    currentEditingItem,
    updateWebWidgetField,
    widgets,
  } = useBuilderStore((state) => state);
  const widgetRquired = getActiveWidgetRequired(item, widgets);

  return (
    <div className="p-0 bg-white">
      <div className="p-2">
        {" "}
        <span className="font-bold">Q. </span>
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block  text-gray-700 mr-2"
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
          <div
            className="p-2"
            onChange={(e) => updateWebWidgetField(item, "data", e)}
          >
            {/* widget content start */}{" "}
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
            {/* widget content end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimeCheckboxWeb;

import { useBuilderStore } from "../../../stores/builder.js";
import { useState, useEffect } from "react";
import {
  getActiveWidgetLabel,
  getActiveWidgetRequired,
} from "../../../utils/helper-functions.js";

export function LimeMultiLineWeb({ item }) {
  const [disableFields, setDisabledFields] = useState(false);
  const {
    showWidgetEditorModal,
    currentEditingWidget,
    updateWebWidgetField,
    widgets,
  } = useBuilderStore((state) => state);
  const widgetRquired = getActiveWidgetRequired(item, widgets);

  return (
    <div className="p-0 bg-white">
      <div className="p-2">
        {/* widget content start */}
        <span className="font-bold"></span>
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700"
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
        <textarea
          onChange={(e) => updateWebWidgetField(item, "data", e.target.value)}
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
        {/* widget content end */}
      </div>
    </div>
  );
}

export default LimeMultiLineWeb;

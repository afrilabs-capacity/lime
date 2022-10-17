import { useBuilderStore } from "../../../stores/builder.js";
import { useState, useEffect } from "react";
import {
  getActiveWidgetLabel,
  getActiveWidgetRequired,
} from "../../../utils/helper-functions.js";
export function LimeDropDownWeb({ item }) {
  const [disableFields, setDisabledFields] = useState(false);
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
        <span className="font-bold"></span>
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700 mr-2"
          dangerouslySetInnerHTML={{
            __html: getActiveWidgetLabel(currentEditingItem, widgets, item),
          }}
        ></label>
        {widgetRquired && (
          <p>
            <span className="rounded bg-red-700 text-white px-1 pb-1 text-xs">
              required
            </span>
          </p>
        )}
        {/* widget content start */}
        <fieldset disabled={disableFields}>
          <select
            onChange={(e) => updateWebWidgetField(item, "data", e.target.value)}
            className=" form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="" selected default disabled>
              Select
            </option>
            {item.options.map((option) => (
              <option value={option.value}>{option.option}</option>
            ))}
          </select>
        </fieldset>
      </div>
    </div>
  );
}

export default LimeDropDownWeb;

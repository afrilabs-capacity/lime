import { useEffect } from "react";
import {
  getWidgetOptionIndex,
  getWidgetIndex,
} from "../../../../../../utils/helper-functions";
import { useBuilderStore } from "../../../../../../stores/builder";
export default function TextField({
  placeholder,
  handleChange,
  field,
  widget,
}) {
  const { currentEditingWidget, updateWidgetField, widgets } = useBuilderStore(
    (state) => state
  );

  const widgetIndex = getWidgetIndex(currentEditingWidget, widgets);

  const widgetOptionIndex = getWidgetOptionIndex(
    widget,
    widgets[widgetIndex].options
  );

  const setWidgetOptionOrValue = () => {
    if (field == "option") {
      return widgets[widgetIndex].options[widgetOptionIndex].option;
    }
    return widgets[widgetIndex].options[widgetOptionIndex].value;
  };

  return (
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder={placeholder}
      onChange={(e) => handleChange && handleChange(e, field, widget)}
      value={setWidgetOptionOrValue()}
    />
  );
}

import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemTypes } from "../item-types.js";
import { useBuilderStore } from "../../../../stores/builder.js";
import { useState, useEffect } from "react";
import {
  getActiveWidgetLabel,
  getActiveWidgetRequired,
} from "../../../../utils/helper-functions.js";
export function LimeDropDown({ item }) {
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
  const { showWidgetEditorModal, currentEditingItem, widgets } =
    useBuilderStore((state) => state);
  const widgetRquired = getActiveWidgetRequired(item, widgets);

  return (
    <div className="p-2 bg-white">
      <div className="flex justify-between">
        <div>
          <span className="rounded bg-slate-700 text-white p-1 text-xs">
            Dropdown
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
        <fieldset disabled={disableFields}>
          <select
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
            {item.options.map((option) => (
              <option value={option.value}>{option.option}</option>
            ))}
          </select>
        </fieldset>
      </div>
    </div>
  );
}

export default LimeDropDown;

import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemTypes } from "../item-types.js";
import { useBuilderStore } from "../../../../stores/builder.js";
import { useState, useEffect } from "react";
import {
  getActiveWidgetLabel,
  getWidgetIndexByKey,
} from "../../../../utils/helper-functions.js";
import WidgetAction from "./components/action/widget-action.js";

export function LimeDivider({ item }) {
  const { deleteWidget, reorderUp, reorderDown, widgets } = useBuilderStore(
    (state) => state
  );
  let indexOfCurrentWidget = getWidgetIndexByKey(item.unique_key, widgets);

  return (
    <div className="p-2 bg-white">
      <div className="flex justify-between">
        <div>
          <span className="rounded bg-slate-700 text-white p-1 text-xs">
            Divider
          </span>
        </div>
        <div className="m-2">
          {" "}
          <i
            className="fa fa-trash cursor-pointer mx-2"
            aria-hidden="true"
            onClick={() => deleteWidget(item)}
          ></i>
          {/* <i className="fas fa-edit mx-2 cursor-pointer"></i> */}
          {indexOfCurrentWidget !== 0 && widgets.length > 1 && (
            <i
              className={`fas fa-arrow-up mx-2 cursor-pointer`}
              onClick={() => reorderUp(item)}
            ></i>
          )}
          {indexOfCurrentWidget !== widgets.length - 1 &&
            widgets.length > 1 && (
              <i
                className="fas fa-arrow-down cursor-pointer"
                onClick={() => reorderDown(item)}
              ></i>
            )}
        </div>
      </div>
      <div className="p-2">
        {/* widget content start */}
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700"
        >
          Divider
        </label>
        <hr />
        {/* widget content end */}
      </div>
    </div>
  );
}

export default LimeDivider;

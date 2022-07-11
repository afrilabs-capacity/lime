import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemTypes } from "../item-types.js";
import { useBuilderStore } from "../../../../stores/builder.js";
import { useState, useEffect } from "react";
import { getActiveWidgetLabel } from "../../../../utils/helper-functions.js";

export function LimeParagraph({ item }) {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  const { showWidgetEditorModal, currentEditingWidget, widgets } =
    useBuilderStore((state) => state);

  return (
    <div className="p-2 bg-white">
      <div className="flex justify-between">
        <div>
          <span className="rounded bg-slate-700 text-white p-1 text-xs">
            Paragraph
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
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700"
        ></label>
        {/* <hr /> */}
        <div className="m-2">
          <label
            for="exampleFormControlInput1"
            class="form-label inline-block mb-2 text-gray-700"
            dangerouslySetInnerHTML={{
              __html: getActiveWidgetLabel(currentEditingWidget, widgets, item),
            }}
          ></label>
        </div>
        {/* widget content end */}
      </div>
    </div>
  );
}

export default LimeParagraph;

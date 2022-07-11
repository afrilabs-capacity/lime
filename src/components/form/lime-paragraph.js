import { useBuilderStore } from "../../stores/builder.js";
import { useState, useEffect } from "react";
import { getActiveWidgetLabel } from "../../utils/helper-functions.js";

export function LimeParagraphPreview({ item }) {
  const { showWidgetEditorModal, currentEditingWidget, widgets } =
    useBuilderStore((state) => state);

  return (
    <div className="p-0 bg-white">
      <div className="p-2">
        {/* widget content start */}
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700"
        ></label>
        {/* <hr /> */}
        <div className="">
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

export default LimeParagraphPreview;

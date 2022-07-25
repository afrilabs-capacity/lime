import { useBuilderStore } from "../../../stores/builder.js";
import { useState, useEffect } from "react";
import { getActiveWidgetLabel } from "../../../utils/helper-functions.js";

export function LimeDividerPreview({ item }) {
  return (
    <div className="p-0 bg-white">
      <div className="p-2">
        {/* widget content start */}
        {/* <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700"
        >
          Divider
        </label> */}
        <hr />
        {/* widget content end */}
      </div>
    </div>
  );
}

export default LimeDividerPreview;

import { useDrop } from "react-dnd";
import { ItemTypes } from "./item-types.js";
import { useBuilderStore } from "../../../stores/builder.js";
import React from "react";
import { getWidgetByKey } from "../../../utils/helper-functions.js";
import BasicButton from "./widgets/components/buttons/basic-button.js";

export default function DropZone() {
  const { widgets, showWidgetPreviewModal } = useBuilderStore((state) => state);

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      canDrop: () => true,
      drop: () => ({ name: "Dustbin" }),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    []
  );
  return (
    <div ref={drop} className="grid col-span-2 content-start">
      <div className="bg-white m-2 p-2 flex justify-between">
        <div>
          <h1 className="text-2xl text-center m-2 bold">Drop Zone</h1>
        </div>
        <div>
          <BasicButton title={"Preview"} handleClick={showWidgetPreviewModal} />
        </div>
      </div>
      <div className="bg-blue">
        {widgets.map((item, key) => {
          const props = {
            item,
          };
          return <div className="m-2 border">{getWidgetByKey(item)}</div>;
        })}
      </div>
    </div>
  );
}

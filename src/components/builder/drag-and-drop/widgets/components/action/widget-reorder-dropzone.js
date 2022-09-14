import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../item-types";
import { useState } from "react";
import { getWidgetIndexByKey } from "../../../../../../utils/helper-functions";
import { useBuilderStore } from "../../../../../../stores/builder";
export default function WidgetReorderDropzone({ item, position }) {
  const { widgets, setIndexOfWidgetToReplace } = useBuilderStore(
    (state) => state
  );
  const [allowDrop, setAllowDrop] = useState(false);
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.WIDGET,
      canDrop: (data, monitor) => {
        const dropResult = monitor.getItem();

        let indexOfWidgetToReplace = getWidgetIndexByKey(
          item.unique_key,
          widgets
        );
        let indexOfCurrentWidget = getWidgetIndexByKey(
          dropResult.unique_key,
          widgets
        );

        console.log(
          "Can drop",
          `${indexOfWidgetToReplace + "*" + indexOfCurrentWidget}`
        );

        if (indexOfWidgetToReplace !== widgets.length - 1) {
          return (
            item.unique_key !== dropResult.unique_key &&
            indexOfCurrentWidget + 1 !== indexOfWidgetToReplace
          );
        } else {
          return item.unique_key !== dropResult.unique_key;
        }
      },
      //   drop: () => ({ destination_widget_key: item.unique_key }),
      drop: (data, monitor) => {
        const dropResult = monitor.getItem();
        console.log("drop", dropResult.unique_key);
        if (item.unique_key !== dropResult.unique_key) {
        }
        return { destination_widget_key: item.unique_key, position: position };
        // }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    []
  );

  return (
    <div
      ref={drop}
      className={` border border-sky-500 border-dotted w-full my-1 text-center ${
        isOver && canDrop ? "h-6" : "h-2"
      }`}
    >
      {getWidgetIndexByKey(item.unique_key, widgets)}
      {isOver && canDrop ? "Drop here.." : ""}
    </div>
  );
}

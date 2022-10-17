import { useBuilderStore } from "../../../../../../stores/builder";
import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemTypes } from "../../../item-types";
import {
  getWidgetIndexByKey,
  isAdmin,
} from "../../../../../../utils/helper-functions";

export default function WidgetAction({ item }) {
  const {
    showWidgetEditorModal,
    deleteWidget,
    reorderWidget,
    widgets,
    reorderUp,
    reorderDown,
  } = useBuilderStore((state) => state);

  const unique_key = item.unique_key;

  let indexOfCurrentWidget = getWidgetIndexByKey(item.unique_key, widgets);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.WIDGET,
    item: { unique_key },
    end: (data, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log(dropResult);
      if (data && dropResult) {
        // alert(`${dropResult.destination_widget_key + "*" + item.unique_key}`);
        let widgetToReplace = dropResult.destination_widget_key;
        let currentWidget = item.unique_key;
        let position = dropResult.position;
        if (widgetToReplace !== currentWidget) {
          reorderWidget(widgetToReplace, currentWidget, position);
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  return (
    <>
      {isAdmin() && (
        <div key={item.unique_key}>
          {" "}
          <i
            className="fa fa-trash cursor-pointer"
            aria-hidden="true"
            onClick={() => deleteWidget(item)}
          ></i>
          <i
            className="fas fa-edit mx-2 cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              showWidgetEditorModal(item);
            }}
          ></i>
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
          {/* <span className="m-1">
        {getWidgetIndexByKey(item.unique_key, widgets)}
      </span> */}
        </div>
      )}
    </>
  );
}

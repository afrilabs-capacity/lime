import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemTypes } from "./item-types.js";
import { useBuilderStore } from "../../../stores/builder.js";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Editor } from "@tinymce/tinymce-react";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import LimeInput from "./widgets/lime-text-input.js";
import LimeParagraph from "./widgets/lime-paragraph.js";
import LimeDivider from "./widgets/lime-divider.js";
import LimeMultiLine from "./widgets/lime-multiline.js";
import LimeDropDown from "./widgets/lime-dropdown.js";

export default function ToolBar() {
  const toolbarLabels = [
    { key: "header-text", value: "Header Text" },
    { key: "label", value: "Label" },
    { key: "paragraph", value: "Paragraph" },
    { key: "text-input", value: "Text Input" },
    { key: "divider", value: "Divider" },
    { key: "dropdown", value: "Dropdown" },
    { key: "checkboxes", value: "Checkboxes (Multi Select)" },
    { key: "radio-buttons", value: "Radio Buttons (Single Select)" },
    { key: "number-input", value: "Number Input" },
    { key: "multi-line-input", value: "Multi-line Input" },
    { key: "image", value: "Image" },
    { key: "date", value: "Date" },
    { key: "range", value: "Range" },
    { key: "rating", value: "Rating" },
    // { key: "two-column-row", value: "Two Column Row" },
    // { key: "three-column-row", value: "Three Column Row" },
    // { key: "four-column-row", value: "Four Column Row" },
    // { key: "four-column-row", value: "Four Column Row" },
  ];

  const [widgets, setWidgets] = useState([]);
  const [tools, setTools] = useState([]);

  return (
    <div className="col-span-1">
      <div className="bg-white p-2 mt-2">
        <h1 className="text-black text-center m-2 text-2xl">Toolbar</h1>
        {toolbarLabels.map((toolbar) => (
          <div className="grid text-white m-1 border border-dotted p-2 cursor-pointer">
            <Box name={toolbar} />
          </div>
        ))}
      </div>
      {/* <div className="grid text-white m-1 border p-2">
        <LimeBasicInput />
      </div> */}
    </div>
  );
}

export function LimeHeader() {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );
  return (
    <div className="h-40 p-2 bg-white">
      <div className="flex justify-between">
        <div>
          <span className="rounded bg-slate-700 text-white p-1 text-xs">
            Header Text
          </span>
        </div>
        <div className="m-2">
          {" "}
          <i className="fa fa-trash cursor-pointer" aria-hidden="true"></i>
          <i className="fas fa-edit mx-2 cursor-pointer"></i>
          <i className="fas fa-grip-vertical cursor-pointer"></i>
        </div>
      </div>
      <div className="m-2">
        <h1 className="text-2xl">Header Text</h1>
      </div>
    </div>
  );
}

export function LimeCheckBoxes() {
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
  return (
    <div className="p-2 bg-white">
      <div className="flex justify-between">
        {" "}
        <div>
          <span className="rounded bg-slate-700 text-white p-1 text-xs">
            Checkboxes
          </span>
        </div>
        <div className="m-2">
          {" "}
          <i className="fa fa-trash cursor-pointer" aria-hidden="true"></i>
          <i className="fas fa-edit mx-2 cursor-pointer"></i>
          <i className="fas fa-grip-vertical cursor-pointer"></i>
        </div>
      </div>
      <div className="p-2">
        {/* widget content start */}
        <fieldset disabled={disableFields}>
          <label
            for="exampleFormControlInput1"
            class="form-label inline-block mb-2 text-gray-700"
          >
            Checkboxes
          </label>
          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Placeholder option 1
            </label>
          </div>
          <div class="flex items-center mb-4">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Placeholder option 2
            </label>
          </div>
          <div class="flex items-center">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Placeholder option 3
            </label>
          </div>
        </fieldset>
        {/* widget content end */}
      </div>
    </div>
  );
}

export function LimeRadioButtons() {
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
  return (
    <div className="p-2 bg-white">
      <div className="flex justify-between">
        {" "}
        <div>
          <span className="rounded bg-slate-700 text-white p-1 text-xs">
            Radio Buttons
          </span>
        </div>
        <div className="m-2">
          {" "}
          <i className="fa fa-trash cursor-pointer" aria-hidden="true"></i>
          <i className="fas fa-edit mx-2 cursor-pointer"></i>
          <i className="fas fa-grip-vertical cursor-pointer"></i>
        </div>
      </div>
      <div className="p-2">
        {/* widget content start */}

        <fieldset disabled={disableFields}>
          <label
            for="exampleFormControlInput1"
            class="form-label inline-block mb-2 text-gray-700"
          >
            Radio Buttons
          </label>

          <div class="flex items-center mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />

            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Placeholder option 1
            </label>
          </div>
          <div class="flex items-center mb-4">
            <input
              checked=""
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Placeholder option 2
            </label>
          </div>

          <div class="flex items-center mb-4">
            <input
              checked=""
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Placeholder option 3
            </label>
          </div>
        </fieldset>

        {/* widget content end */}
      </div>
    </div>
  );
}

export function LimePlaceholder() {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );
  return <hr ref={drag} />;
}

export function LimeDate() {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );
  const [startDate, setStartDate] = useState(new Date());
  const [disableFields, setDisabledFields] = useState(true);
  return (
    <div className="p-2 bg-white">
      <div className="flex justify-between">
        <div>
          <span className="rounded bg-slate-700 text-white p-1 text-xs">
            Date
          </span>
        </div>
        <div className="m-2">
          {" "}
          <i className="fa fa-trash cursor-pointer" aria-hidden="true"></i>
          <i className="fas fa-edit mx-2 cursor-pointer"></i>
          <i className="fas fa-grip-vertical cursor-pointer"></i>
        </div>
      </div>
      <div className="p-2">
        {/* widget content start */}

        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700"
        >
          Date
        </label>
        <hr />
        <div className="m-2">
          <DatePicker
            disabled={disableFields}
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          />
        </div>

        {/* widget content end */}
      </div>
    </div>
  );
}

export function LimeRating() {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <div className="p-2 bg-white">
      <div className="flex justify-between">
        <div>
          <span className="rounded bg-slate-700 text-white p-1 text-xs">
            Rating
          </span>
        </div>
        <div className="m-2">
          {" "}
          <i className="fa fa-trash cursor-pointer" aria-hidden="true"></i>
          <i className="fas fa-edit mx-2 cursor-pointer"></i>
          <i className="fas fa-grip-vertical cursor-pointer"></i>
        </div>
      </div>
      <div className="p-2">
        {/* widget content start */}
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700"
        >
          Placeholder text...
        </label>
        <hr />
        <div className="m-2">
          <i className="fa fa-star cursor-pointer" aria-hidden="true"></i>
          <i className="fas fa-star mx-2 cursor-pointer"></i>
          <i className="fas fa-star cursor-pointer"></i>
          <i className="fas fa-star mx-2 cursor-pointer"></i>
          <i className="fas fa-star cursor-pointer"></i>
        </div>
        {/* widget content end */}
      </div>
    </div>
  );
}

export const Box = function Box({ name }) {
  const { widgets, addWidget } = useBuilderStore((state) => state);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: name,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      //   alert(item);
      if (item && item.key == "text-input") {
        const widgetUniqueId = uuid();
        addWidget({
          unique_key: widgetUniqueId,
          name: "text-input",
          title: "Text Input",
          label: "Placeholder Text",
          required: false,
        });
      }

      if (item && item.key == "divider") {
        const widgetUniqueId = uuid();
        addWidget({
          unique_key: widgetUniqueId,
          name: "divider",
          title: "Line Break",
        });
      }
      if (item && item.key == "paragraph") {
        const widgetUniqueId = uuid();
        addWidget({
          unique_key: widgetUniqueId,
          name: "paragraph",
          title: "Paragraph",
          label: "Placeholder Text",
        });
      }
      if (item && item.key == "multi-line-input") {
        const widgetUniqueId = uuid();
        addWidget({
          unique_key: widgetUniqueId,
          name: "multi-line-input",
          title: "Multiline Input",
          label: "Placeholder Text",
          required: false,
        });
      }
      if (item && item.key == "dropdown") {
        const widgetUniqueId = uuid();
        const widgetOptionUniqueId = uuid();
        addWidget({
          unique_key: widgetUniqueId,
          name: "dropdown",
          title: "Dropdown",
          label: "Placeholder Text",
          required: false,
          options: [
            { unique_key: widgetOptionUniqueId, option: "", value: "" },
          ],
        });
      }
      if (item && item.key == "header-text") {
        addWidget(<LimeHeader />);
      }
      if (item && item.key == "checkboxes") {
        addWidget(<LimeCheckBoxes />);
      }
      if (item && item.key == "radio-buttons") {
        addWidget(<LimeRadioButtons />);
      }

      if (item && item.key == "date") {
        addWidget(<LimeDate />);
      }

      if (item && item.key == "rating") {
        addWidget(<LimeRating />);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div className="text-black" ref={drag} data-testid={`box`}>
      {name.value}
    </div>
  );
};
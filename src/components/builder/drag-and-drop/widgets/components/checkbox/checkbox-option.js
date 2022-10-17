import { useBuilderStore } from "../../../../../../stores/builder";
import TextField from "./textfield";

export default function CheckboxOption({ item, parentWidget }) {
  const { addDropdownOption, removeDropdownOption, updateWidgetFieldOptions } =
    useBuilderStore((state) => state);
  return (
    <>
      {" "}
      <div className="p-2 grid md:grid-cols-5 gap-4 content-center">
        <div className="col-span-3">
          <h5>Options</h5>
          <TextField
            placeholder={"Options 1"}
            handleChange={updateWidgetFieldOptions}
            field={"option"}
            widget={item}
          />
        </div>
        <div>
          <h5>Value</h5>
          <TextField
            placeholder={"value"}
            handleChange={updateWidgetFieldOptions}
            field={"value"}
            widget={item}
            disabled={true}
          />
        </div>
        <div className="flex items-end">
          <div
            className="bg-green-500 p-2 px-3 rounded-full mr-3 "
            onClick={() => addDropdownOption()}
          >
            <i
              className="fa fa-plus cursor-pointer text-white"
              aria-hidden="true"
            ></i>
          </div>
          {parentWidget.options.length > 1 && (
            <div
              className="bg-red-500 p-2 px-3 rounded-full"
              onClick={() => removeDropdownOption(item)}
            >
              <i
                className="fa fa-minus cursor-pointer text-white"
                aria-hidden="true"
              ></i>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

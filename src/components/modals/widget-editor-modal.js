import { useBuilderStore } from "../../stores/builder";
import RichText from "../editor/rich-text";
import { useEffect, useState } from "react";
import {
  getActiveWidgetTitle,
  getActiveWidgetRequired,
  getWidgetIndex,
} from "../../utils/helper-functions";
import DropDownOption from "../builder/drag-and-drop/widgets/components/dropdown/dropdown-option";
import CheckboxOption from "../builder/drag-and-drop/widgets/components/checkbox/checkbox-option";
import RadioOption from "../builder/drag-and-drop/widgets/components/radiobutton/radio-option";

export default function WidetEditor() {
  const {
    hideWidgetEditorModal,
    widgetEditorModal,
    currentEditingWidget,
    updateWidgetField,
    widgets,
  } = useBuilderStore((state) => state);

  const widgetRquired = getActiveWidgetRequired(currentEditingWidget, widgets);
  const widgetIndex = getWidgetIndex(currentEditingWidget, widgets);

  const handleFieldRequiredChange = () => {
    updateWidgetField("required", !widgetRquired);
  };

  return (
    <>
      <div
        className={`absolute z-10 overflow-y-auto top-0 w-full left-0 ${
          widgetEditorModal ? "" : "hidden"
        } id="modal"`}
      >
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-8/12"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-y-scroll">
              {/* modal body */}
              <div className="p-2">
                <h1 className="text-2xl font-bold">
                  {getActiveWidgetTitle(currentEditingWidget, widgets)}
                </h1>
              </div>
              <div className="p-2">
                <RichText />
              </div>
              <div className="p-2">
                {/* widget content start */}

                <div class="flex items-center mb-4">
                  <label
                    for="default-checkbox"
                    class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Required
                  </label>
                  <p></p>
                  <input
                    onChange={() => handleFieldRequiredChange()}
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    checked={widgetRquired}
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>

                {currentEditingWidget &&
                  currentEditingWidget.name == "dropdown" && (
                    <>
                      {widgets[widgetIndex].options.map((obj) => (
                        <DropDownOption
                          item={obj}
                          parentWidget={widgets[widgetIndex]}
                        />
                      ))}
                    </>
                  )}

                {currentEditingWidget &&
                  currentEditingWidget.name == "checkbox" && (
                    <>
                      {widgets[widgetIndex].options.map((obj) => (
                        <CheckboxOption
                          item={obj}
                          parentWidget={widgets[widgetIndex]}
                        />
                      ))}
                    </>
                  )}

                {currentEditingWidget && currentEditingWidget.name == "radio" && (
                  <>
                    {widgets[widgetIndex].options.map((obj) => (
                      <RadioOption
                        item={obj}
                        parentWidget={widgets[widgetIndex]}
                      />
                    ))}
                  </>
                )}

                {/* widget content end */}
              </div>
              {/* modal body */}
            </div>
            <div class="bg-gray-200 px-4 py-3 text-right">
              <button
                type="button"
                class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                onClick={() => hideWidgetEditorModal()}
              >
                <i class="fas fa-times"></i> Close
              </button>
              {/* <button
                type="button"
                class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
              >
                <i class="fas fa-plus"></i> Create
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import create from "zustand";
import {
  getWidgetIndex,
  getWidgetOptionIndex,
} from "../utils/helper-functions";
import { v4 as uuid } from "uuid";

export const useBuilderStore = create((set) => ({
  currentEditingWidget: null,
  widgetEditorModal: false,
  widgetPreviewModal: false,
  bears: 0,
  widgets: [],
  surveyResponse: [],
  setWidgetsFromTemplate: (widgets) => {
    // alert(JSON.stringify(widgets));
    set((state) => ({
      widgets: (state.widgets = JSON.parse(widgets)),
    }));
  },
  showWidgetEditorModal: (item) => {
    set((state) => ({
      widgetEditorModal: (state.widgetEditorModal = true),
      currentEditingWidget: (state.currentEditingWidget = item),
    }));
  },
  hideWidgetEditorModal: () =>
    set((state) => ({
      widgetEditorModal: (state.widgetEditorModal = false),
      currentEditingWidget: null,
    })),
  showWidgetPreviewModal: () => {
    set((state) => ({
      widgetPreviewModal: (state.widgetPreviewModal = true),
    }));
  },
  hideWidgetPreviewModal: () =>
    set((state) => ({
      widgetPreviewModal: (state.widgetPreviewModal = false),
    })),
  addWidget: (widget) => {
    console.log(widget);
    set((state) => {
      return {
        widgets: [...state.widgets, widget],
      };
    });
  },
  updateWebWidgetField: (item, field, data) =>
    set((state) => {
      const widgetIndex = getWidgetIndex(item, state.widgets);
      console.log("Before widget update", state.widgets[widgetIndex].label);
      if (item.name !== "checkbox") {
        const updateObject = () => {
          return state.widgets.map((obj) => {
            console.log("obj", state.widgets[widgetIndex].unique_key);
            if (obj.unique_key == state.widgets[widgetIndex].unique_key) {
              return { ...obj, [field]: data };
            }

            return obj;
          });
        };
        console.log("After widget update", state.widgets);
        return {
          widgets: updateObject(),
        };
      } else {
        const { value, checked } = data.target;

        const updateObject = () => {
          return state.widgets.map((obj) => {
            console.log("obj", state.widgets[widgetIndex].unique_key);
            if (obj.unique_key == state.widgets[widgetIndex].unique_key) {
              if (checked) {
                if (!obj.data) {
                  obj.data = [];
                  obj.data.push(value);
                } else {
                  obj.data.push(value);
                }
              } else {
                if (obj.data && obj.data.length) {
                  let objWithoutItem = obj.data.filter((e) => e !== value);
                  obj.data = objWithoutItem;
                  console.log("new obj", obj.data);
                }
              }
            }
            return obj;
          });
        };
        console.log("After widget update", state.widgets);
        return {
          widgets: updateObject(),
        };
      }

      // return state.widgets;
    }),
  updateWidgetField: (field, data) =>
    set((state) => {
      const widgetIndex = getWidgetIndex(
        state.currentEditingWidget,
        state.widgets
      );
      // console.log("Before widget update", state.widgets[widgetIndex].label);
      const updateObject = () => {
        return state.widgets.map((obj) => {
          console.log("obj", state.widgets[widgetIndex].unique_key);
          if (obj.unique_key == state.widgets[widgetIndex].unique_key) {
            return { ...obj, [field]: data };
          }

          return obj;
        });
      };
      console.log("After widget update", state.widgets);
      return {
        widgets: updateObject(),
      };
    }),
  updateWidgetFieldOptions: (e, field, widgetOption) =>
    set((state) => {
      const widgetIndex = getWidgetIndex(
        state.currentEditingWidget,
        state.widgets
      );

      const widgetOptionIndex = getWidgetOptionIndex(
        widgetOption,
        state.widgets[widgetIndex].options
      );

      console.log("Before widget update", state.widgets[widgetIndex].label);
      const updateObject = () => {
        return state.widgets.map((obj) => {
          console.log("obj", state.widgets[widgetIndex].unique_key);
          if (obj.unique_key == state.widgets[widgetIndex].unique_key) {
            obj.options[widgetOptionIndex] = {
              ...obj.options[widgetOptionIndex],
              [field]: e.target.value,
            };

            // console.log("###", obj.options[widgetOptionIndex]);
          }

          return obj;
        });
      };
      console.log("After widget update", state.widgets);
      return {
        widgets: updateObject(),
      };
    }),
  addDropdownOption: () =>
    set((state) => {
      const widgetIndex = getWidgetIndex(
        state.currentEditingWidget,
        state.widgets
      );
      console.log("Before widget update", state.widgets[widgetIndex].label);
      const updateObject = () => {
        return state.widgets.map((obj) => {
          if (obj.unique_key == state.widgets[widgetIndex].unique_key) {
            obj.options.push({
              unique_key: uuid(),
              option: "",
              value: "",
            });
            return obj;
          }

          return obj;
        });
      };
      console.log("After widget update", state.widgets);
      return {
        widgets: updateObject(),
      };
    }),
  removeDropdownOption: (item) =>
    set((state) => {
      const widgetIndex = getWidgetIndex(
        state.currentEditingWidget,
        state.widgets
      );
      console.log("Before widget update", state.widgets[widgetIndex].label);
      const updateObject = () => {
        return state.widgets.map((obj) => {
          if (obj.unique_key == state.widgets[widgetIndex].unique_key) {
            if (obj.options.length > 1) {
              let objWithoutItem = obj.options.filter((obj1) => obj1 !== item);
              obj.options = objWithoutItem;
            }

            return obj;
          }

          return obj;
        });
      };
      console.log("After widget update", state.widgets);
      return {
        widgets: updateObject(),
      };
    }),
  removeObjectFromArray: () => {
    return {};
    // setEmployees(current =>
    //   current.filter(obj => {
    //     return obj.id !== 2;
    //   }),
    // );
  },
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

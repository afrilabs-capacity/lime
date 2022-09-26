import create from "zustand";
import {
  getWidgetIndex,
  getWidgetOptionIndex,
  getWidgetIndexByKey,
} from "../utils/helper-functions";
import { v4 as uuid } from "uuid";

export const useBuilderStore = create((set) => ({
  isAuthUser: () => {
    return localStorage.getItem("user_id");
  },
  currentEditingWidget: null,
  widgetEditorModal: false,
  widgetPreviewModal: false,
  bears: 0,
  widgets: [],
  surveyResponse: [],
  survey: null,
  activeNavigationMenu: 0,
  indexOfWidgetToReplace: null,
  indexOfCurrentWidget: null,
  setIndexOfWidgetToReplace: (indexOfWidgetToReplace) => {
    set((state) => ({
      indexOfWidgetToReplace: (state.indexOfWidgetToReplace =
        indexOfWidgetToReplace),
    }));
  },
  setIndexOfCurrentWidget: (indexOfCurrentWidget) => {
    set((state) => ({
      indexOfCurrentWidget: (state.indexOfCurrentWidget = indexOfCurrentWidget),
    }));
  },
  setActiveNavigationMenu: (tabIndex) => {
    set((state) => ({
      activeNavigationMenu: (state.activeNavigationMenu = tabIndex),
    }));
  },
  setGlobalSurvey: (survey) => {
    // alert(JSON.stringify(widgets));
    set((state) => ({
      survey: (state.survey = survey),
    }));
  },
  setWidgetsFromTemplate: (widgets) => {
    // alert(JSON.stringify(widgets));
    set((state) => ({
      widgets: (state.widgets = widgets.length ? JSON.parse(widgets) : []),
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
    // console.log(widget);
    set((state) => {
      return {
        widgets: [...state.widgets, widget],
      };
    });
  },
  updateWebWidgetField: (item, field, data) =>
    set((state) => {
      console.log("item", item.required);
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
  deleteWidget: (item) => {
    set((state) => ({
      widgets: state.widgets.filter(
        (widget) => widget.unique_key !== item.unique_key
      ),
    }));
    // alert(item.unique_key);
  },
  reorderWidget: (widgetToReplace, currentWidget, position) => {
    // // alert(position);
    // set((state) => {
    //   let finalWidgets = [];
    //   let indexOfWidgetToReplace = getWidgetIndexByKey(
    //     widgetToReplace,
    //     state.widgets
    //   );
    //   let indexOfCurrentWidget = getWidgetIndexByKey(
    //     currentWidget,
    //     state.widgets
    //   );
    //   console.log(
    //     "found widget",
    //     `${indexOfWidgetToReplace + "*" + indexOfCurrentWidget + position}`
    //   );
    //   let widgetToReplaceData = state.widgets[indexOfWidgetToReplace];
    //   let currentWidgetData = state.widgets[indexOfCurrentWidget];
    //   // let removeCurrentWidgetFromWidgets = state.widgets.filter(
    //   //   (widget) => widget.unique_key !== currentWidgetData.unique_key
    //   // );
    //   let removeCurrentWidgetFromWidgets = state.widgets;
    //   let IndexesToBeRemoved = [indexOfCurrentWidget];
    //   while (IndexesToBeRemoved.length) {
    //     removeCurrentWidgetFromWidgets.splice(IndexesToBeRemoved.pop(), 1);
    //   }
    //   for (
    //     let index = 0;
    //     index < removeCurrentWidgetFromWidgets.length;
    //     index++
    //   ) {
    //     // if (position == "bottom") {
    //     //   finalWidgets.push(removeCurrentWidgetFromWidgets[index]);
    //     //   if (index == indexOfWidgetToReplace) {
    //     //     finalWidgets.push(currentWidgetData);
    //     //   }
    //     // } else if (indexOfWidgetToReplace == 0) {
    //     //   finalWidgets.push(currentWidgetData);
    //     //   finalWidgets.push(removeCurrentWidgetFromWidgets[index]);
    //     // } else {
    //     //   if (index == indexOfWidgetToReplace) {
    //     //     finalWidgets.push(currentWidgetData);
    //     //   }
    //     //   finalWidgets.push(removeCurrentWidgetFromWidgets[index]);
    //     // }
    //     // if (index == indexOfWidgetToReplace - 1) {
    //     //   finalWidgets.push(currentWidgetData);
    //     //   finalWidgets.push(removeCurrentWidgetFromWidgets[index]);
    //     // }
    //     // if (index == indexOfWidgetToReplace - 1) {
    //     //   finalWidgets.push(currentWidgetData);
    //     // } else {
    //     //   finalWidgets.push(removeCurrentWidgetFromWidgets[index]);
    //     // }
    //     // if()
    //   }
    //   // alert(indexOfWidgetToReplace);
    //   removeCurrentWidgetFromWidgets.splice(
    //     indexOfWidgetToReplace < indexOfCurrentWidget
    //       ? indexOfWidgetToReplace
    //       : indexOfWidgetToReplace - 1,
    //     0,
    //     currentWidgetData
    //   );
    //   // console.log("final widgets", finalWidgets);
    //   return {
    //     widgets: (state.widgets = removeCurrentWidgetFromWidgets),
    //   };
    // });
  },
  reorderUp: (item) => {
    set((state) => {
      let indexOfCurrentWidget = getWidgetIndexByKey(
        item.unique_key,
        state.widgets
      );
      let currentWidgetData = state.widgets[indexOfCurrentWidget];

      let widgets = state.widgets;

      let currentWidgetSwapData = state.widgets[indexOfCurrentWidget - 1];
      widgets[indexOfCurrentWidget - 1] = currentWidgetData;
      widgets[indexOfCurrentWidget] = currentWidgetSwapData;
      console.log(widgets);
      return {
        widgets: (state.widgets = widgets),
      };
    });
    // alert(item.unique_key);
  },
  reorderDown: (item) => {
    set((state) => {
      let indexOfCurrentWidget = getWidgetIndexByKey(
        item.unique_key,
        state.widgets
      );
      let currentWidgetData = state.widgets[indexOfCurrentWidget];

      let widgets = state.widgets;

      let currentWidgetSwapData = state.widgets[indexOfCurrentWidget + 1];
      widgets[indexOfCurrentWidget + 1] = currentWidgetData;
      widgets[indexOfCurrentWidget] = currentWidgetSwapData;
      console.log(widgets);
      return {
        widgets: (state.widgets = widgets),
      };
    });
  },
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  loout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_name");
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
  },
}));

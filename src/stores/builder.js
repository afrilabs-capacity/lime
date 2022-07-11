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
  widgets: [
    {
      unique_key: "6abd2ad2-82ee-4b9a-9c2e-76585feb70b2",
      name: "text-input",
      title: "Text Input",
      label: "<p>First Name</p>",
      required: true,
    },
    {
      unique_key: "e4574f99-7c5e-48df-a427-cada51bce5df",
      name: "divider",
      title: "Line Break",
    },
    {
      unique_key: "1efe2a4a-3c74-428c-9170-3728a2400f7d",
      name: "dropdown",
      title: "Dropdown",
      label: "<p>Country</p>",
      required: true,
      options: [
        {
          unique_key: "5e414685-f6c7-4773-ace8-ffe46a74fb3c",
          option: "America",
          value: "America",
        },
        {
          unique_key: "edcf070e-66db-40f4-90d0-fa8210c1d9f8",
          option: "Nigeria",
          value: "Nigeria",
        },
        {
          unique_key: "188d5409-0b97-4b1b-ab0f-5935130d55ac",
          option: "Canada",
          value: "Canada",
        },
      ],
    },
    {
      unique_key: "85b1cbfb-c635-4cac-9b3b-448f9898163f",
      name: "multi-line-input",
      title: "Multiline Input",
      label: "<p>Occupation</p>",
      required: true,
    },
    {
      unique_key: "2bc9319f-2d46-495b-a838-6c9b578249cb",
      name: "dropdown",
      title: "Dropdown",
      label: "<p>Work Experience</p>",
      required: true,
      options: [
        {
          unique_key: "f0835386-0165-45de-a99c-645a617c4a28",
          option: "1-3 years",
          value: "1-3",
        },
        {
          unique_key: "e08af438-f27c-4ec6-ae84-08c0ff622e1a",
          option: "3-5 years",
          value: "3-5",
        },
        {
          unique_key: "3ede7553-a49a-46fd-bc8a-321edfd38e53",
          option: "5-10 years",
          value: "5-10",
        },
      ],
    },
  ],
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
  updateWidgetField: (field, data) =>
    set((state) => {
      const widgetIndex = getWidgetIndex(
        state.currentEditingWidget,
        state.widgets
      );
      console.log("Before widget update", state.widgets[widgetIndex].label);
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

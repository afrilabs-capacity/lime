import LimeDivider from "../components/builder/drag-and-drop/widgets/lime-divider";
import LimeInput from "../components/builder/drag-and-drop/widgets/lime-text-input";
import LimeMultiLine from "../components/builder/drag-and-drop/widgets/lime-multiline";
import LimeParagraph from "../components/builder/drag-and-drop/widgets/lime-paragraph";
import LimeDropDown from "../components/builder/drag-and-drop/widgets/lime-dropdown";
import LimeCheckbox from "../components/builder/drag-and-drop/widgets/lime-checkbox";
import LimeRadio from "../components/builder/drag-and-drop/widgets/lime-radio";

import LimeDividerPreview from "../components/form/lime-divider";
import LimeInputPreview from "../components/form/lime-text-input";
import LimeParagraphPreview from "../components/form/lime-paragraph";
import LimeDropDownPreview from "../components/form/lime-dropdown";
import LimeMultiLinePreview from "../components/form/lime-multiline";
import LimeCheckboxPreview from "../components/form/lime-checkbox";
import LimeRadioPreview from "../components/form/lime-radio";

export const getWidgetIndex = (currentEditingWidget, widgets) => {
  return currentEditingWidget
    ? widgets.findIndex((x) => x.unique_key === currentEditingWidget.unique_key)
    : null;
};

export const getWidgetOptionIndex = (widgetOption, widgetOptions) => {
  return widgetOption
    ? widgetOptions.findIndex((x) => x.unique_key === widgetOption.unique_key)
    : null;
};

export const getActiveWidgetLabel = (currentEditingWidget, widgets, widget) => {
  const widgetIndex = getWidgetIndex(currentEditingWidget, widgets);
  if (currentEditingWidget) {
    return widgets[widgetIndex].label == ""
      ? "Placeholder Text"
      : widgets[widgetIndex].label;
  }

  return widget.label;
};

export const getActiveWidgetRequired = (
  currentEditingWidget,
  widgets,
  widget
) => {
  const widgetIndex = getWidgetIndex(currentEditingWidget, widgets);
  if (currentEditingWidget) {
    return widgets[widgetIndex].required;
  }

  return false;
};

export const getActiveWidgetTitle = (currentEditingWidget, widgets) => {
  const widgetIndex = getWidgetIndex(currentEditingWidget, widgets);
  if (currentEditingWidget) {
    return widgets[widgetIndex].title;
  }

  return "";
};

export const getWidgetByKey = (item) => {
  if (item && item.name == "text-input") {
    return <LimeInput item={item} />;
  }

  if (item && item.name == "divider") {
    return <LimeDivider item={item} />;
  }
  if (item && item.name == "paragraph") {
    return <LimeParagraph item={item} />;
  }
  if (item && item.name == "multi-line-input") {
    return <LimeMultiLine item={item} />;
  }
  if (item && item.name == "dropdown") {
    return <LimeDropDown item={item} />;
  }
  if (item && item.name == "checkbox") {
    return <LimeCheckbox item={item} />;
  }
  if (item && item.name == "radio") {
    return <LimeRadio item={item} />;
  }

  //   if (item && item.key == "header-text") {
  //     addWidget(<LimeHeader />);
  //   }
  //   if (item && item.key == "checkboxes") {
  //     addWidget(<LimeCheckBoxes />);
  //   }
  //   if (item && item.key == "radio-buttons") {
  //     addWidget(<LimeRadioButtons />);
  //   }

  //   if (item && item.key == "date") {
  //     addWidget(<LimeDate />);
  //   }

  //   if (item && item.key == "rating") {
  //     addWidget(<LimeRating />);
  //   }
};

export const getPreviewWidgetByKey = (item) => {
  if (item && item.name == "text-input") {
    return <LimeInputPreview item={item} />;
  }

  if (item && item.name == "divider") {
    return <LimeDividerPreview item={item} />;
  }
  if (item && item.name == "paragraph") {
    return <LimeParagraphPreview item={item} />;
  }
  if (item && item.name == "multi-line-input") {
    return <LimeMultiLinePreview item={item} />;
  }
  if (item && item.name == "dropdown") {
    return <LimeDropDownPreview item={item} />;
  }
  if (item && item.name == "checkbox") {
    return <LimeCheckboxPreview item={item} />;
  }
  if (item && item.name == "radio") {
    return <LimeRadioPreview item={item} />;
  }

  //   if (item && item.key == "header-text") {
  //     addWidget(<LimeHeader />);
  //   }
  //   if (item && item.key == "checkboxes") {
  //     addWidget(<LimeCheckBoxes />);
  //   }
  //   if (item && item.key == "radio-buttons") {
  //     addWidget(<LimeRadioButtons />);
  //   }

  //   if (item && item.key == "date") {
  //     addWidget(<LimeDate />);
  //   }

  //   if (item && item.key == "rating") {
  //     addWidget(<LimeRating />);
  //   }
};

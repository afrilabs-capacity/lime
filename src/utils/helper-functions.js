import LimeDivider from "../components/builder/drag-and-drop/widgets/lime-divider";
import LimeInput from "../components/builder/drag-and-drop/widgets/lime-text-input";
import LimeMultiLine from "../components/builder/drag-and-drop/widgets/lime-multiline";
import LimeParagraph from "../components/builder/drag-and-drop/widgets/lime-paragraph";
import LimeDropDown from "../components/builder/drag-and-drop/widgets/lime-dropdown";
import LimeCheckbox from "../components/builder/drag-and-drop/widgets/lime-checkbox";
import LimeRadio from "../components/builder/drag-and-drop/widgets/lime-radio";

import LimeDividerPreview from "../components/form/preview/lime-divider";
import LimeInputPreview from "../components/form/preview/lime-text-input";
import LimeParagraphPreview from "../components/form/preview/lime-paragraph";
import LimeDropDownPreview from "../components/form/preview/lime-dropdown";
import LimeMultiLinePreview from "../components/form/preview/lime-multiline";
import LimeCheckboxPreview from "../components/form/preview/lime-checkbox";
import LimeRadioPreview from "../components/form/preview/lime-radio";

import LimeDividerWeb from "../components/form/web/lime-divider";
import LimeInputWeb from "../components/form/web/lime-text-input";
import LimeParagraphWeb from "../components/form/web/lime-paragraph";
import LimeDropDownWeb from "../components/form/web/lime-dropdown";
import LimeMultiLineWeb from "../components/form/web/lime-multiline";
import LimeCheckboxWeb from "../components/form/web/lime-checkbox";
import LimeRadioWeb from "../components/form/web/lime-radio";

export const getWidgetIndexByKey = (currentEditingWidgetKey, widgets) => {
  return currentEditingWidgetKey
    ? widgets.findIndex((x) => x.unique_key === currentEditingWidgetKey)
    : null;
};

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

export const getWebWidgetByKey = (item) => {
  if (item && item.name == "text-input") {
    return <LimeInputWeb item={item} />;
  }

  if (item && item.name == "divider") {
    return <LimeDividerWeb item={item} />;
  }
  if (item && item.name == "paragraph") {
    return <LimeParagraphWeb item={item} />;
  }
  if (item && item.name == "multi-line-input") {
    return <LimeMultiLineWeb item={item} />;
  }
  if (item && item.name == "dropdown") {
    return <LimeDropDownWeb item={item} />;
  }
  if (item && item.name == "checkbox") {
    return <LimeCheckboxWeb item={item} />;
  }
  if (item && item.name == "radio") {
    return <LimeRadioWeb item={item} />;
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

const getLinkOfNamedOrUnmamedSurvey = (survey) => {
  if (survey.project_id) {
    return `/project/${survey.project_uuid}/survey/${survey.uuid}`;
  } else {
    return `/survey/${survey.uuid}/standalone`;
  }
};

export const getActivityResourceLink = (activity) => {
  if (activity.model == "User") {
    return "/user/" + activity.model_data.uuid;
  }

  if (activity.model == "Survey") {
    return getLinkOfNamedOrUnmamedSurvey(activity.model_data);
  }
};

export const formatAMPM = (date) => {
  // gets the hours
  let hours = date.getHours();
  // gets the day
  let days = date.getDay();
  // gets the month
  let minutes = date.getMinutes();
  // gets AM/PM
  let ampm = hours >= 12 ? "pm" : "am";
  // converts hours to 12 hour instead of 24 hour
  hours = hours % 12;
  // converts 0 (midnight) to 12
  hours = hours ? hours : 12; // the hour '0' should be '12'
  // converts minutes to have leading 0
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // the time string
  let time = hours + ":" + minutes + " " + ampm;

  // gets the match for the date string we want
  let match = date.toString().match(/\w{3} \w{3} \d{1,2} \d{4}/);

  //the result
  return match[0] + " " + time;
};

export function isAuthUser() {
  return localStorage.getItem("user_id");
}

export function isAdmin() {
  if (isAuthUser()) {
    return JSON.parse(localStorage.getItem("roles")).filter(
      (role) => role.name == "admin"
    ).length
      ? true
      : false;
  }
  return false;
}

export function isCollector() {
  if (isAuthUser) {
    return JSON.parse(localStorage.getItem("roles")).filter(
      (role) => role.name == "collector"
    ).length
      ? true
      : false;
  }
  return false;
}

// export const API_BASE = "/api";
// export const BASE_URL = "https://wordalbums.com/api";
export const API_BASE = "";
export const BASE_URL = "";

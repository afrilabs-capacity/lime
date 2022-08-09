import { useBuilderStore } from "../stores/builder";
import axios from "axios";

const GetSurvey = (uuid) => {
  const {
    widgets,
    survey,
    showWidgetPreviewModal,
    setWidgetsFromTemplate,
    setSurvey,
  } = useBuilderStore((state) => state);
  const url = "/api/survey/" + uuid;
  axios
    .get(url)
    .then((response) => {
      if (response.status == 200) {
        setSurvey(response.data.survey);
        if (response.data.survey.data) {
          setWidgetsFromTemplate(response.data.survey.data);
        }

        //   console.log(response.data.series);
      }
    })
    .catch((error) => {
      alert(error.message);
      console.error("There was an error!", error);
    });
};

const UpdateSurvey = (uuid) => {
  const {
    widgets,
    survey,
    showWidgetPreviewModal,
    setWidgetsFromTemplate,
    setSurvey,
  } = useBuilderStore((state) => state);
  const url = "/api/survey/update";
  axios
    .post(url, { uuid: uuid, data: JSON.stringify(widgets) })
    .then((response) => {
      if (response.status == 200) {
        setSurvey(response.data.survey);
        console.log(response.data.series);
      }
    })
    .catch((error) => {
      alert(error.message);
      console.error("There was an error!", error);
    });
};
export default { GET_SURVEY: GetSurvey, UPDATE_SURVEY: UpdateSurvey };

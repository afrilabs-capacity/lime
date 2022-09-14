import Survey from "../../../components/builder/survey-builder";
import SurveyStandalone from "../../../components/builder/survey-builder-standalone";
import Master from "../../master";

export default function SurveyBuilderStandalone() {
  return <Master component={<SurveyStandalone />} />;
}

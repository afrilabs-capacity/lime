import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function NewSurvey() {
  let { projectuuid } = useParams();
  useEffect(() => {
    // alert(projectuuid);
  }, []);
  return (
    <div className="flex flex-col items-center mx-3 my-6  ">
      <h1 className="text text-3xl font-bold text-center my-2 text-blue-900">
        Create a Survey
      </h1>
      <div className="w-10/12">
        <a href={`/survey-templates/project/${projectuuid}`}>
          <div className="p-8 border-side border-sky-400 border-l-8 hover:border-sky-900 border-l-8 my-2 rounded-lg shadow cursor-pointer AsideBackground">
            <p className="text-lg">Use a template</p>
          </div>
        </a>

        <a href={`/new-survey-name/project/${projectuuid}`}>
          <div className="p-8 border-side border-sky-400 border-l-8 hover:border-sky-900 border-l-8 my-2 rounded-lg shadow cursor-pointer AsideBackground">
            <p className="text-lg">Start from scratch</p>
          </div>
        </a>
      </div>
    </div>
  );
}

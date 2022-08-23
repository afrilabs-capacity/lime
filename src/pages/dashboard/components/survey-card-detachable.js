import BasicButton from "../../../components/builder/drag-and-drop/widgets/components/buttons/basic-button";
export default function SurveyCardDetachable({
  survey,
  detachSurvey,
  isDetaching,
}) {
  return (
    <div
      className="grid md:grid-cols-5 bg-white rounded-lg p-1 gap-4 divide-x shadow border-side border-orange-400 border-l-8 my-2"
      style={{ borderLeftWidth: 14 }}
    >
      <div className="col-span-2">
        <div className="flex justify-end">
          <span className="text-xs bg-orange-50 px-3  text-orange-400 rounded">
            Ended
          </span>
        </div>
        <div>
          <p className="text-lg font-normal text-blue-900">{survey.name}</p>
        </div>
        <div>
          <p className="text-xs">Project Name</p>
        </div>
        <div className="flex justify-end mt-2">
          <a
            href={`/new-survey/${survey.uuid}`}
            className="rounded-lg  border border-gray w-5/12 p-1.5 text-center mx-1"
          >
            <div>
              <p>View Survey</p>
            </div>
          </a>
          <BasicButton
            title={isDetaching ? "Detaching..." : "DETACH"}
            classes={"mt-0 bg-sky-700"}
            handleClick={() => detachSurvey(survey.uuid)}
          />
        </div>
        <div></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold mb-2 text-blue-900 text-2xl">
          {survey.responses}
        </p>
        <p className="text-xs">Responses</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold mb-2 text-blue-900 text-2xl">88%</p>
        <p className="text-xs">Completion Rate</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold mb-2 text-blue-900 text-2xl">2</p>
        <p className="text-xs">Collectors</p>
      </div>
      <div></div>
    </div>
  );
}

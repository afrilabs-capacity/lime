export default function SurveyCard({ survey }) {
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
        <div className="flex justify-end">
          <a
            href={`/new-survey/${survey.uuid}`}
            className="border border-gray w-5/12 p-1 text-center"
          >
            <div>
              <p>View Survey</p>
            </div>
          </a>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold mb-2 text-blue-900 text-2xl">1568</p>
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

export default function Surveys() {
  return (
    <>
      <div className="flex flex-col items-center mx-3 my-6  ">
        <h1 className="text text-3xl font-bold text-center my-2">
          Create a Survey
        </h1>
        <div className="w-10/12">
          <a href="/survey-templates">
            <div className="p-8 AsideBackground my-2 rounded shadow cursor-pointer">
              <p className="text-lg">Use a template</p>
            </div>
          </a>

          <a href="/new-survey-name">
            <div className="p-8 AsideBackground rounded shadow cursor-pointer">
              <p className="text-lg">Start from scratch</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

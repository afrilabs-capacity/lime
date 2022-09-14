export default function TopCards() {
  return (
    <>
      {/* <div class="flex flex-wrap w-full my-8">
        <div class="w-full mb-6 lg:mb-0">
          <h1 class="text-blue-900 text-2xl font-normal">Dashboard</h1>
          
        </div>
      </div> */}
      <div class="grid md:grid-cols-3 gap-4">
        <a href="/new-project-name">
          <div className="flex rounded-lg  bg-blue-200 p-2">
            <div className="bg-blue-900 text-white p-4 rounded">
              <i class="fas fa-list text-6xl"></i>
            </div>
            <div className="m-2">
              <p className="text-lg text-blue-900">New</p>
              <p className="text-lg text-blue-900">Project</p>
            </div>
          </div>
        </a>
        <a href="/new-survey-name/standalone">
          <div className="flex rounded-lg  bg-sky-600 p-2">
            <div className="bg-blue-900 text-white p-4 rounded">
              <i class="fas fa-clipboard-list text-6xl"></i>
            </div>
            <div className="m-2">
              <p className="text-lg text-white">New</p>
              <p className="text-lg text-white">Survey</p>
            </div>
          </div>
        </a>
        <a href="/report/generate">
          <div className="flex rounded-lg  bg-blue-900 p-2">
            <div className="bg-blue-900 text-white p-4 rounded">
              <i class="fas fa-chart-bar text-6xl"></i>
            </div>
            <div className="m-2">
              <p className="text-lg text-white">New</p>
              <p className="text-lg text-white">Report</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

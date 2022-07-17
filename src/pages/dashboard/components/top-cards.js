export default function TopCards() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-8">
            <div class="w-full mb-6 lg:mb-0">
              <h1 class="text-blue-900 text-2xl font-normal">Dashboard</h1>
              {/* <div class="h-1 w-20 bg-indigo-500 rounded"></div> */}
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
            <div className="flex rounded-lg  bg-blue-200 p-2">
              <div className="bg-blue-900 text-white p-4 rounded">
                <i class="fas fa-list text-6xl"></i>
              </div>
              <div className="m-2">
                <p className="text-lg text-blue-900">New</p>
                <p className="text-lg text-blue-900">Project</p>
              </div>
            </div>
            <a href="/new-survey-name">
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
            <div className="flex rounded-lg  bg-blue-900 p-2">
              <div className="bg-blue-900 text-white p-4 rounded">
                <i class="fas fa-chart-bar text-6xl"></i>
              </div>
              <div className="m-2">
                <p className="text-lg text-white">New</p>
                <p className="text-lg text-white">Report</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

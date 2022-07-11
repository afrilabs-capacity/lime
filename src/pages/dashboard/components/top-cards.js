export default function TopCards() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-8">
            <div class="w-full mb-6 lg:mb-0">
              <h1 class="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
                Dashboard
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3 w-1/2">
              <div class="flex rounded-lg h-full bg-white p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-white text-lg title-font font-medium">
                    New Project
                  </h2>
                </div>
                <div class="flex-grow">
                  {/* <p class="leading-relaxed text-base text-white">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p> */}
                  <a
                    href=""
                    class="mt-3 text-indigo-800 hover:text-gray-900 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3 w-1/2">
              <div class="flex rounded-lg h-full bg-white p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="text-white text-lg title-font font-medium">
                    New Survey
                  </h2>
                </div>
                <div class="flex-grow">
                  {/* <p class="leading-relaxed text-base text-white">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p> */}
                  <a
                    href=""
                    class="mt-3 text-indigo-800 hover:text-gray-900 inline-flex items-center"
                  >
                    New Report
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3 w-1/2">
              <div class="flex rounded-lg h-full bg-white p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 class="text-white text-lg title-font font-medium">
                    New Report
                  </h2>
                </div>
                <div class="flex-grow">
                  {/* <p class="leading-relaxed text-base text-white">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p> */}
                  <a
                    href=""
                    class="mt-3 text-indigo-800 hover:text-gray-900 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

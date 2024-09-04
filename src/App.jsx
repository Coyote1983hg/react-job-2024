import React from 'react';


const App = () => {
  return (
    <>
      <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* Logo */}
              <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                <img className="h-10 w-auto" src="images/logo.png" alt="React Job" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">IT Jobs</span>
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <a href="/index.html" className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</a>
                  <a href="/jobs.html" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Jobs</a>
                  <a href="/add-job.html" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Add Job</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-indigo-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Discover Your IT Opportunities
            </h1>
            <p className="my-4 text-xl text-white">Find the Job that fits your skills and needs</p>
          </div>
        </div>
      </section>

      {/* Developers and Employers */}
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Developers</h2>
              <p className="mt-2 mb-4">Browse our React jobs and start your career today</p>
              <a href="/jobs.html" className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 shadow-md">
                Browse Jobs
              </a>
            </div>
            <div className="bg-indigo-200 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Employers</h2>
              <p className="mt-2 mb-4">Post your job and find the perfect React developer</p>
              <a href="/add-job.html" className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
                Post a Job
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Job Listing 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Full-Time</div>
                  <h3 className="text-xl font-bold">Junior Web Developer</h3>
                </div>
                <div className="mb-5">We are seeking a Junior Web Developer to join our team in  Düsseldorf,
                  The ideal candidate will have strong skills in  HTML, CSS, and JavaScript...
                </div>
                <h3 className="text-indigo-500 mb-2">$70-$80k /Year</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-4">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Düsseldorf, DE
                  </div>
                  <a href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm shadow-md"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

         {/* Job Listing 2 */}
         <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Remote</div>
                  <h3 className="text-xl font-bold">Junior Developer</h3>
                </div>
                <div className="mb-5">
                  Are you passionate about frontend development? 
                  Join our team in vibrant Duisburg and work on exciting projects that make a difference...
                </div>
                <h3 className="text-indigo-500 mb-2">$70-$80k /Year</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-4">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Duisburg, DE
                  </div>
                  <a href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm shadow-md"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* Job Listing 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Remote</div>
                  <h3 className="text-xl font-bold">Flutter Developer</h3>
                </div>
                <div className="mb-5">
                  Are you passionate about frontend development? 
                  Join our team in vibrant Dortmund and work on exciting projects that make a difference...
                </div>
                <h3 className="text-indigo-500 mb-2">$70-$80k /Year</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-4">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Dortmund, DE
                  </div>
                  <a href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm shadow-md"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Job Listing 4 - Düsseldorf */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Full-Time</div>
                  <h3 className="text-xl font-bold">Flutter Developer</h3>
                </div>
                <div className="mb-5">Join our team in Düsseldorf as a Flutter Developer. You will be building responsive mobile applications...</div>
                <h3 className="text-indigo-500 mb-2">€50,000 - €60,000 /Year</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-4">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Düsseldorf, DE
                  </div>
                  <a href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm shadow-md">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Job Listing 5 - Köln */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Full-Time</div>
                  <h3 className="text-xl font-bold">Frontend Engineer</h3>
                </div>
                <div className="mb-5">We are looking for a Frontend Engineer to join our team in Köln, focusing on Flutter and modern mobile technologies...</div>
                <h3 className="text-indigo-500 mb-2">€55,000 - €65,000 /Year</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-4">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Köln, DE
                  </div>
                  <a href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm shadow-md">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Job Listing 6 - Essen */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Full-Time</div>
                  <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
                </div>
                <div className="mb-5">Join our innovative team in Essen as a Senior Frontend Developer, working with React and TypeScript...</div>
                <h3 className="text-indigo-500 mb-2">€60,000 - €70,000 /Year</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-4">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Essen, DE
                  </div>
                  <a href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm shadow-md">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View all jobs</a>
      </section>
    </>
  );
};

export default App;
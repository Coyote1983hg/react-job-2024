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
                <span className="hidden md:block text-white text-2xl font-bold ml-2">React Jobs</span>
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
              Become a React Dev
            </h1>
            <p className="my-4 text-xl text-white">Find the React Job that fits your skills and needs</p>
          </div>
        </div>
      </section>
      {/* Developers and Employers */}
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Developers</h2>
              <p className="mt-2 mb-4">Browse our React jobs and start your career today</p>
              <a href="/add-job.html" className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">Add Job</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Employers</h2>
              <p className="mt-2 mb-4">Post your job and find the perfect React developer</p>
              <a href="/add-job.html" className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">Post a Job</a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Job Listing1 */}
          </div>
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <a href="jobs.html" className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View all jobs</a>
      </section>
    </>
  );
};

export default App;
'use client';

import { useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";

export default function Home() {

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page refresh
    const formData = new FormData(e.target); // Access form data
    const url = formData.get('url');
    const customUrl = formData.get('customUrl');

    //POST Req To dataHandle
    const req = await (await fetch('/api/datahandle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url, customUrl })
    })).json()

    // toast message
    if (req.success) {
      // Show toast notification
      toast('Register!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce, // Use the imported Bounce transition
      });
    } else {
      // Show toast notification
      toast(`${req.message}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce, // Use the imported Bounce transition
      });
    }

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} // Use the imported Bounce transition
      />
      <div className="flex items-center overflow-hidden justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            URL Shortener
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                URL
              </label>
              <input
                type="text"
                id="url"
                name="url"
                placeholder="Enter your URL"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="customUrl"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Custom URL
              </label>
              <input
                type="text"
                id="customUrl"
                name="customUrl"
                placeholder="Enter your custom URL"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}

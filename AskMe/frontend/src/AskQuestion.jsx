// src/components/AskQuestion.jsx

import React from 'react';

const AskQuestion = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Question submitted successfully!');
  };

  return (
    <div className="min-h-screen text-gray-800 px-4 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x">
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-md mb-6">
        <h1 className="text-2xl font-bold text-blue-600">StackIt</h1>
        <nav className="flex items-center gap-4 text-lg">
          <a href="/" className="text-blue-500 hover:underline">Home</a>
          <span className="cursor-pointer">🔔</span>
          <span className="cursor-pointer">👤</span>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label htmlFor="title" className="block font-medium mb-1">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your question title"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block font-medium mb-1">Description</label>
            <div className="bg-gray-100 border border-gray-300 rounded-md p-2">
              <div className="flex gap-2 mb-2">
                {['B', 'I', 'U', 'S', '•', '1.', '🔗', '📷', '📄', '🔧'].map((tool, index) => (
                  <button key={index} type="button" className="text-sm px-2 py-1 bg-white border rounded">
                    {tool}
                  </button>
                ))}
              </div>
              <textarea
                id="description"
                name="description"
                rows="5"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Describe your issue in detail..."
                required
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block font-medium mb-1">Tags</label>
            <input
              type="text"
              id="tags"
              name="tags"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. javascript, react, tailwind"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AskQuestion;
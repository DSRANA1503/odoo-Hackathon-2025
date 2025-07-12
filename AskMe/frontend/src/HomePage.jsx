import React from 'react';
import { useNavigate } from 'react-router-dom'; // only if you're using routing

const HomePage = () => {
  const navigate = useNavigate(); // remove if not using React Router

  const questions = [
    {
      id: 1,
      title: 'How to join 2 columns in a data set to make a separate column in SQL?',
      description:
        'I do not know the code for it as I am a beginner. As an example what I need to do is like there is a column 1 containing First name, and column 2 consists of last name I want a column to combine …',
      tags: ['sql', 'database', 'beginner'],
      author: 'User123',
      answers: 3
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-900 px-6 py-8">
      {/* Header */}
      <header className="flex justify-between items-center bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold text-blue-600">StackIt</h1>
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </header>

      {/* Main Panel */}
      <main className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow space-y-6">
        {/* Top Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <button
            onClick={() => navigate('/ask')}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Ask New Question
          </button>

          <div className="flex gap-3 text-gray-700 text-sm">
            <button className="hover:underline">Newest</button>
            <button className="hover:underline">Unanswered</button>
            <button className="hover:underline">More</button>
          </div>
        </div>

        {/* Search Bar */}
        <input
          type="search"
          placeholder="Search questions..."
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Question List */}
        <div className="space-y-4">
          {questions.map((q) => (
            <div
              key={q.id}
              className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-100/80"
            >
              <div className="flex justify-between">
                <div className="space-y-1">
                  <p className="font-semibold">{q.title}</p>
                  <p className="text-sm text-gray-700">
                    {q.description.length > 120
                      ? q.description.slice(0, 120) + '…'
                      : q.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    Tags:{' '}
                    {q.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded mr-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                  <p className="text-xs text-gray-500">Posted by: {q.author}</p>
                </div>
                <div className="text-center bg-blue-100 px-3 py-1 rounded-full text-blue-700">
                  {q.answers} Answers
                </div>
              </div>

              {/* View / Add Answer Buttons */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => navigate(`/question/${q.id}`)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-sm"
                >
                  View Answers
                </button>
                <button
                  onClick={() => navigate(`/question/${q.id}/answer`)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition text-sm"
                >
                  Add Answer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 pt-4 text-blue-600 text-sm">
          <button className="px-3 py-1 hover:underline">« Prev</button>
          <button className="px-3 py-1 hover:underline">Next »</button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

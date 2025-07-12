import React, { useState } from 'react';

const Answer = () => {
  const [answers, setAnswers] = useState([
    { text: 'The || Operator. The + Operator. The CONCAT Function.', votes: 3 },
    { text: 'Details', votes: 1 }
  ]);
  const [newAnswer, setNewAnswer] = useState('');

  const handleSubmit = () => {
    if (newAnswer.trim()) {
      setAnswers([...answers, { text: newAnswer, votes: 0 }]);
      setNewAnswer('');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="text-sm text-gray-500 mb-4">Question &gt; How to join 2 columns in SQL</div>

        <h2 className="text-2xl font-semibold mb-2 text-gray-800">How to join 2 columns in a data set to make a separate column in SQL</h2>
        <p className="text-gray-700 mb-4">
          I do not know the code for it as I am a beginner. As an example: column 1 contains
          First name and column 2 contains Last name. I want a column to combine them.
        </p>

        <div className="mb-6">
          <span className="text-sm text-gray-600">Tags:</span>
          <span className="bg-blue-100 text-blue-700 px-2 py-1 text-sm rounded ml-2">SQL</span>
          <span className="bg-green-100 text-green-700 px-2 py-1 text-sm rounded ml-2">Data Manipulation</span>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Answers:</h3>
          {answers.map((ans, index) => (
            <div key={index} className="border border-gray-300 rounded p-4 mb-3 bg-gray-50">
              <p className="text-gray-700">{ans.text}</p>
              <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
                ⬆️ Upvote ({ans.votes})
              </button>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Submit Your Answer:</h3>
          <textarea
            className="w-full h-28 p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            placeholder="Write your answer here..."
          />
          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Answer;
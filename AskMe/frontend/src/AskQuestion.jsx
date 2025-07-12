import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AskQuestion = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagArray = tags.split(',').map((tag) => tag.trim()).filter(Boolean);

    const postData = {
      title,
      description, // HTML string from ReactQuill
      tags: tagArray,
    };

    try {
      const res = await fetch('http://localhost:5000/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      const data = await res.json();
      if (data.success) {
        alert('✅ Question submitted!');
        setTitle('');
        setDescription('');
        setTags('');
      } else {
        alert('❌ Submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('🚨 Server error occurred.');
    }
  };

  return (
    <div className="min-h-screen text-gray-800 px-4 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your question title"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block font-medium mb-1">Description</label>
            <ReactQuill
              id="description"
              value={description}
              onChange={setDescription}
              className="bg-white rounded"
              placeholder="Describe your issue in detail..."
              theme="snow"
            />
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block font-medium mb-1">Tags</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. javascript, react, tailwind"
            />
            <p className="text-sm text-gray-500 mt-1">Comma-separated values (e.g. react, api, css)</p>
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

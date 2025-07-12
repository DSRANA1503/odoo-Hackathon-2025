import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">StackIt</div>

      <div className="flex flex-wrap gap-3 items-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Ask New Question
        </button>
        <button className="border px-3 py-1 rounded hover:bg-gray-100">Newest</button>
        <button className="border px-3 py-1 rounded hover:bg-gray-100">Unanswered</button>
        <select className="border px-3 py-1 rounded hover:bg-gray-100">
          <option>More</option>
          <option>Most Answered</option>
          <option>Oldest</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          className="border px-3 py-1 rounded w-52"
        />
        <button className="text-blue-600 hover:text-blue-800 font-semibold">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;

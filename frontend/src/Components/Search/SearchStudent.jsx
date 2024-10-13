import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <>
      <div className="flex justify-center mb-4">
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md">
          <input
            type="search"
            className="form-control block w-full px-1 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Student Search"
            role="searchbox"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
import { useState } from "react";
import { Outlet } from "react-router-dom";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="w-full flex justify-center">
        <input
          className="max-w-[300px] w-2/3 h-10 outline outline-1"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-300 h-10 w-20 rounded-sm"
          onClick={() => (window.location.href = `/search?query=${query}`)}
        >
          Search
        </button>
      </div>
      <Outlet />
      <div className="flex justify-center mb-44">
        <button
          onClick={() => {
            if (page > 1) {
                const urlParams = new URLSearchParams(window.location.search);
                const query = urlParams.get('query');
                const page = urlParams.get('page')
                window.location.href = `/search?query=${query}&page=${page}`;
            }
          }}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Previous Page
        </button>
        <button
          onClick={() => {
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('query');
            const page = urlParams.get('page')
            window.location.href = `/search?query=${query}&page=${page}`;
          }}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default SearchComponent;

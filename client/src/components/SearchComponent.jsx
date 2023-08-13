import { useState } from "react";
import { Outlet } from "react-router-dom";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
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
    </>
  );
};

export default SearchComponent;

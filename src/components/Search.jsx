import { useState } from "react";
import { useContext } from "react";
import { QueryContext } from "../context/queryContext";
const Search = () => {
  const { setFilter, setPage } = useContext(QueryContext);

  const [search, setSearch] = useState("");
  const handeleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") setFilter(null);
    setFilter(`{name: "${search}"}`);
    setPage(1);
    setSearch("");
  };

  return (
    <form onSubmit={handeleSubmit} className="mt-4">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium  sr-only text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            required
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-smborder  rounded-lg   bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default Search;

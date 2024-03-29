import { useQuery } from "@apollo/client";

import { useContext } from "react";
import { QueryContext } from "../context/queryContext";

const Pagination = () => {
  const { page, setPage, GET_PAGINATION } = useContext(QueryContext);

  const { loading, error, data } = useQuery(GET_PAGINATION);
  let paginationInfo;
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (!loading) {
    paginationInfo = data.characters.info;
    const { pages, next, prev } = paginationInfo;

    return (
      <div className="grid grid-cols-1 ">
      <div className="flex flex-col justify-self-center my-4">
        {/* Help text */}
        <span className="text-sm text-gray-400">
          Showing <span className="font-semibold text-white">{page}</span> of{" "}
          <span className="font-semibold text-white">{pages}</span> of{" "}
          <span className="font-semibold  text-white"></span>{" "}
          Pages
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          {/* Buttons */}
          <button
            disabled={page <= 1}
            onClick={() => setPage(prev)}
            className={`${
              page <= 1 ? "cursor-not-allowed " : ""
            } flex  items-center justify-center px-4 h-10 text-base font-medium border-0 border-e  rounded-s  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white`}
          >
            <svg
              className="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Prev
          </button>
          <button
            disabled={page >= pages}
            onClick={() => setPage(next)}
            className={`${
              page >= pages ? "cursor-not-allowed " : ""
            } flex  items-center justify-center px-4 h-10 text-base font-medium  border-0 border-s  rounded-e  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white`}
          >
            Next
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    );
  }
};
export default Pagination;

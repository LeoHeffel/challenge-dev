import { useContext } from "react";
import { QueryContext } from "../context/queryContext";
import { useQuery } from "@apollo/client";

const Details = () => {
  const { GET_CHARACTER, setDetailsId } = useContext(QueryContext);

  const { loading, error, data } = useQuery(GET_CHARACTER);
  let character;
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (!loading) {
    character = data.character;

    return (
      <div className="flex h-screen justify-center items-center">
        <div
          id="toast-message-cta"
          className="relative  w-500 h-500 max-w-xs p-4 rounded-lg shadow bg-gray-800 text-gray-400"
        >
          <div className="flex">
            <img
              className="w-8 h-8 rounded-full"
              src={character.image}
              alt={"image of " + character.name}
            />
            <div className="ms-3 text-sm font-normal">
              <span className="mb-1 text-sm font-semibold  text-white">
                {character.name}
              </span>
              <div className="mb-2 text-sm font-normal">
                Status : {character.status}.
              </div>
              <div className="mb-2 text-sm font-normal">
                Gender : {character.gender}.
              </div>
              <div className="mb-2 text-sm font-normal">
                Species : {character.species}.
              </div>
              <div className="mb-2 text-sm font-normal">
                Type : {character.type || "Unknown"}.
              </div>
              <div className="mb-2 text-sm font-normal">
                Location : {character.location.name || "Unknown"}.
              </div>
              <div className="mb-2 text-sm font-normal">
                Origin : {character.origin.name || "Unknown"}.
              </div>
              <div className="mb-2 text-sm font-normal">
                Dimension : {character.origin.dimension || "Unknown"}.
              </div>
            </div>
            <button
              onClick={() => setDetailsId(null)}
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 justify-center items-center flex-shrink-0 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5  inline-flex h-8 w-8 text-gray-500 hover:text-white bg-gray-800 hover:bg-gray-700"
              data-dismiss-target="#toast-message-cta"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
};
export default Details;

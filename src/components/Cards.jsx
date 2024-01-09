import Card from "./Card";
import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { QueryContext } from "../context/queryContext";
import Details from "./Details";
import { PushSpinner, StageSpinner } from "react-spinners-kit";

const Cards = () => {
  const { GET_CHARACTERS, detailsId } = useContext(QueryContext);

  const { loading, error, data } = useQuery(GET_CHARACTERS);
  let characters = [];

  if (error) return `Error! ${error.message}`;
  if (!loading) {
    characters = data.characters.results;

    return (
      <>
        {detailsId && (
          <div className=" top-0 left-0 w-screen h-screen z-50 absolute">
            <Details />
          </div>
        )}
        {characters.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <div>
            <h3 className="text-3xl font-bold text-white text-center">
              No characters found
            </h3>
          </div>
        )}
      </>
    );
  }else return <div className="flex my-20 justify-center">  <StageSpinner  size={50} color="#686769" loading={loading} /></div>
};

export default Cards;

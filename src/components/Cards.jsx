import {useParams} from "react-router-dom"
import Card from "./Card"
import { useQuery, gql } from '@apollo/client';
import { useContext } from "react";
import { QueryContext } from "../context/queryContext";
import Details from "./Details";

const Cards = () => {
    
    const {GET_CHARACTERS, detailsId} = useContext(QueryContext)


    
  const { loading, error, data } = useQuery(GET_CHARACTERS);
      let characters =[];
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    if (!loading) {
        characters =data.characters.results
    
    return (<>
    {detailsId&&
        <div className=" top-0 left-0 w-screen h-screen z-50 absolute">
            <Details  />
        </div>} 

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
         { characters.map((character) => (
            <Card key={character.id} character={character} />
         ))}
        </div>
       </>
      )}   
}

export default Cards


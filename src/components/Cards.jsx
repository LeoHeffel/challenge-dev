import {useParams} from "react-router-dom"
import Card from "./Card"
import { useQuery, gql } from '@apollo/client';



const Cards = () => {
    const page = useParams().page || 1
    
    const GET_CHARACTERS = gql`
    query {
        characters(filter: { name: "rick" }, page: ${page}) {
          results {
            id
            name
            image
          }
        }
      }
      
  `;
  const { loading, error, data } = useQuery(GET_CHARACTERS);
      let characters =[];
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    if (!loading) {
        characters =data.characters.results
    
    return (
       
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

         { characters.map((character) => (
            <Card key={character.id} character={character} />
         ))}
        </div>

    )}
}

export default Cards


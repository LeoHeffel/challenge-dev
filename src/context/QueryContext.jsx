import { createContext, useEffect, useState } from "react";
import { useQuery, gql } from '@apollo/client';


export const QueryContext = createContext();

const QueryProvider = ({ children }) => {
   
    const [filter, setFilter] = useState(null)
    const [page, setPage] = useState(1)
    const [detailsId, setDetailsId] = useState(null)
    

    const GET_CHARACTERS = gql`
    query {
        characters(filter: ${ filter }, page: ${page}) {
          results {
            id
            name
            image
          }
        }
      }
      
  `;
 


  const GET_PAGINATION = gql`
  query {
      characters(filter: ${ filter },page: ${page}) {
        info {
          count
          pages
          next
          prev
        }
      }
    }
  `;
 
  const GET_CHARACTER = gql`
  query {
    character(id: ${detailsId}) {
      name
      status
      species
      type
      gender
      image
      origin {
        name
        type
        dimension
      }
      location {
        name
        dimension
      }
    }
  }
`;

 

    return (
        <QueryContext.Provider value={{filter, setFilter, GET_CHARACTERS, GET_PAGINATION, page, setPage, GET_CHARACTER, detailsId, setDetailsId }}>
            {children}
        </QueryContext.Provider>
    )
}
export default QueryProvider